
export default function Pets({currentUser}) {

    return (
        <>
            <h1>Your pets:</h1>
            {currentUser ?
                currentUser.pets.length > 0 ? currentUser.pets.map(pet => <h2>{pet.pet_name}</h2>) : <h2>You have no pets, go make some!</h2>
            : ''}
        </>
    )

}