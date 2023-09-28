import { Outlet, Link, NavLink, useLoaderData, useActionData, Form, redirect } from "react-router-dom";
import { getContacts, createContact } from "../contacts"

//Esta funcion sera invocada cuando el usuario acceda a la ruta "/" para cargar de manera asincronica los contactos que luego usamos para generar los Links de manera dinamica
export async function loader(){
    const contacts = await getContacts();
    return { contacts };
}

//Gracias a este action y al <Form method="post"> podemos hacer el post para crear un nuevo contacto sin tener que usar useState, ni useEffect ni fetch(url, post) ni nada.
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
  }


export default function Root() {
    const {contacts} = useLoaderData();
    
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
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
            </form>
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
                    className={({isActive, isPending})=>(isActive ? "active" : isPending? "pending" : "")}
                    >
                      {({isActive,isPending})=>(<>{contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {isPending && <>⏳</>}
                      {contact.favorite && <span>★</span>}</>)}
                    
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

        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }