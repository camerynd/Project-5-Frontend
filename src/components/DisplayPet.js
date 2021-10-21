
export default function DisplayPet({pet, deletePet}) {

    function handleClick() {
        deletePet(pet.id)
    }

    return (
        <>
        <div className="adopted-pet">
            <h2>{pet.pet_name}</h2>
            <img className={pet.pet_class} src={pet.pet_image} alt=""/>
            <img className={`wings-${pet.pet_class}`} src={pet.accessory_1} alt=""/>
            <img className={`hat-${pet.pet_class}`} src={pet.accessory_2} alt=""/>
            <img className={`glasses-${pet.pet_class}`} src={pet.accessory_3} alt=""/>
            <img className={`necklace-${pet.pet_class}`} src={pet.accessory_4} alt=""/>
            <p>"{pet.pet_message}" <br/> -{pet.pet_name}</p>
        </div>
        <button onClick={handleClick}>Delete Pet</button>
        </>
    )

}