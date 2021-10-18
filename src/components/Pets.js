
export default function Pets({pets}) {

    return (
        <>
            <h1>Your pets:</h1>
            {pets.length > 0 ? pets.map(pet => <h2>{pet.pet_name}</h2>) : <h2>You have no pets, go make some!</h2>}
        </>
    )

}