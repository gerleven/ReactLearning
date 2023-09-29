import { Outlet, Link, NavLink, useLoaderData, useActionData, Form, redirect, useNavigation  } from "react-router-dom";
import { getContacts, createContact } from "../contacts"
import { useState, useEffect } from "react";

//Esta funcion sera invocada cuando el usuario acceda a la ruta "/" para cargar de manera asincronica los contactos que luego usamos para generar los Links de manera dinamica
export async function loader({request}){
    const url = new URL(request.url); //Esta request es enviado por el <Form> del search
    const searchParams = url.searchParams.get("q") || "";
    const contacts = await getContacts(searchParams);
    return { contacts, searchParams };
}

//Gracias a este action y al <Form method="post"> podemos hacer el post para crear un nuevo contacto sin tener que usar useState, ni useEffect ni fetch(url, post) ni nada.
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
  }


export default function Root() {
    const {contacts, searchParams} = useLoaderData();
    const navigation = useNavigation(); //navigation has this props: [state, location, formData, json, text, formAction, formMethod]
    
    //Una forma de mantener sincronizado el value del Search con el searchParams de la URL seria esta:
    // const [searchValue, setSearchValue] = useState("");
    // useEffect(()=>{
    //   setSearchValue(searchParams==null?"":searchParams);
    // },[searchParams]);
    //value={searchValue}
    //onChange={(e)=>{setSearchValue(e.target.value)}}

    //Pero de esta forma no ahorramos la variable de estado y tener que poner el value y el onChange en el Form:
    useEffect(()=>{
      document.getElementById("searchNameInput").value=searchParams;
    },[searchParams]);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            {/* Este Form no tiene method entonces por defecto la request que manda es un get (la recibe el loader) y como no tiene action=<path> lo manda a esta misma ruta donde fue renderizado*/}
            <Form id="search-form" role="search">
              <input
                id="searchNameInput"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            <Form method="post">
                <button type="submit">New</button>
            </Form>
          </div>


          <nav>
            {/* <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul> */}

          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({isActive, isPending})=>(isActive ? "active" : isPending? "pending" : "")}>
                      {
                        ({isActive,isPending})=>(
                          <>
                            {contact.first || contact.last ? (
                            <>
                              {contact.first} {contact.last}
                            </>
                            ) : (
                              <i>No Name</i>
                            )}{" "}
                            {isPending && <>⏳</>}
                            {isActive?<span>✔</span>:<></>}
                            {contact.favorite && <span>★</span>}
                          </>
                        )
                      }
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>


          



        </div>

        <div id="detail" className={navigation.state==="loading"?"loading":""}>
            <Outlet/>
        </div>
      </>
    );
  }