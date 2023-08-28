import React, { Component } from 'react';

// Definición de tipos para las props del componente
interface UserProfileProps {
  username: string;
  age: number;
}

// Definición de tipos para el state del componente
interface UserProfileState {
  bio: string;
  isEditing: boolean;
}

class UserProfile extends Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);

    // Inicializamos el state con valores iniciales
    this.state = {
      bio: 'Escribe algo sobre ti...',
      isEditing: false,
    };
  }

  // Manejador de evento para cambiar el estado de edición
  toggleEdit = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  };

  // Manejador de evento para guardar los cambios en la bio
  saveBio = (newBio: string) => {
    this.setState({
      bio: newBio,
      isEditing: false,
    });
  };

  render() {
    const { username, age } = this.props;
    const { bio, isEditing } = this.state;

    return (
      <div className='componente' style={{width: "30vw"}}>
        <h2>{username}</h2>
        <p>Edad: {age}</p>

        {isEditing ? (
          // Formulario de edición
          <div>
            <textarea
              value={bio}
              onChange={event => this.setState({ bio: event.target.value })}
            />
            <button onClick={() => this.saveBio(bio)}>Guardar</button>
          </div>
        ) : (
          // Modo de visualización
          <div>
            <p>{bio}</p>
            <button onClick={this.toggleEdit}>Editar</button>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
