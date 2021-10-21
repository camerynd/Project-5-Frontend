import DisplayPet from './DisplayPet'
import {useState, useEffect} from 'react'

export default function Pets() {

    const [pets, setPets] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("jwt");
          fetch(`http://localhost:3000/api/v1/profile`, {
          method: "GET",
          headers: {
          Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setPets(data.user.pets)
            });
          } else {
            console.log("please log in")
          }
        });
        }, []);

    function deletePet(id) {

        fetch(`http://localhost:3000/pets/${id}`, {
            method: "DELETE",
            }).then((r) => {
            if (r.ok) {
                console.log("deleted")
                setPets(pets.filter((pet) => pet.id !== id))
                }
            });

    }

    return (
        <>
            <h1>Your pets:</h1>
            {pets.length > 0 ? pets.map(pet => <DisplayPet key={pet.id} deletePet={deletePet} pet={pet}/>) : <h2>You have no pets, go make some!</h2>}
        </>
    )

}