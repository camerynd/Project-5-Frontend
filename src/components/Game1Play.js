import {useState} from 'react'

export default function Game1Play({currentUser, restart}) {

    const [petName, setPetName] = useState('')

    const [pet, setPet] = useState('')
    const [petClass, setPetClass] = useState('')
    const [petComment, setPetComment] = useState('')

    const [accessory1, setAccessory1] = useState('')

    const [accessory2, setAccessory2] = useState('')

    const [accessory3, setAccessory3] = useState('')

    const [accessory4, setAccessory4] = useState('')

    function handleClickTiger() {
        pet === "https://i.pinimg.com/originals/95/cc/5a/95cc5a0cd19bc28a9fae5273a6ec8a28.png" ? setPet('') 
        : setPet("https://i.pinimg.com/originals/95/cc/5a/95cc5a0cd19bc28a9fae5273a6ec8a28.png") 
        setPetClass('tiger')
    }

    function handleClickSadCat() {
        pet === "https://cdn160.picsart.com/upscale-235969073088212.png?r1024x1024" ? setPet("") 
        : setPet("https://cdn160.picsart.com/upscale-235969073088212.png?r1024x1024")
        setPetClass('sad-cat')
    }

    function handleClickRagdoll() {
        pet === "https://www.sloppykisscards.com/images/byo/breeds/cat/greyragdoll.png" ? setPet('') 
        : setPet("https://www.sloppykisscards.com/images/byo/breeds/cat/greyragdoll.png")  
        setPetClass('ragdoll')
    }

    function handleClickAngelWings() {
        accessory1 === 'https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png' ? setAccessory1('') : setAccessory1('https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png')
    }

    function handleClickFairyWings() {
        accessory1 === 'https://www.pngarts.com/files/7/Fairy-Wings-PNG-Image-Transparent-Background.png' ? setAccessory1('') : setAccessory1('https://www.pngarts.com/files/7/Fairy-Wings-PNG-Image-Transparent-Background.png')
    }

    function handleClickBugWings() {
        accessory1 === 'https://www.pngarts.com/files/7/Realistic-Fairy-Wings-PNG-Image-Transparent-Background.png' ? setAccessory1('') : setAccessory1('https://www.pngarts.com/files/7/Realistic-Fairy-Wings-PNG-Image-Transparent-Background.png')
    }

    function handleClickCowboyHat() {
        accessory2 === 'https://clipartix.com/wp-content/uploads/2019/02/cowboy-hat-transparent-2019-38.png' ? setAccessory2('') : setAccessory2('https://clipartix.com/wp-content/uploads/2019/02/cowboy-hat-transparent-2019-38.png')
    }

    function handleClickCommunistHat() {
        accessory2 === 'https://cdn140.picsart.com/254339484017212.png?r1024x1024' ? setAccessory2('') : setAccessory2('https://cdn140.picsart.com/254339484017212.png?r1024x1024') 
    }

    function handleClickFedora() {
        accessory2 === 'http://www.pngmart.com/files/3/Fedora-PNG-Pic.png' ? setAccessory2('') : setAccessory2('http://www.pngmart.com/files/3/Fedora-PNG-Pic.png') 
    }

    function handleClickGreyGlasses() {
        accessory3 === 'http://3.bp.blogspot.com/-V_Q4gOLNA4A/U6eR3AqpYeI/AAAAAAAAFhc/oVrngT9PtaU/s1600/glasses_001_o.png' ? setAccessory3('') : setAccessory3('http://3.bp.blogspot.com/-V_Q4gOLNA4A/U6eR3AqpYeI/AAAAAAAAFhc/oVrngT9PtaU/s1600/glasses_001_o.png') 
    }

    function handleClickGoldGlasses() {
        accessory3 === 'http://cdn140.picsart.com/279872651005211.png' ? setAccessory3('') : setAccessory3('http://cdn140.picsart.com/279872651005211.png') 
    }

    function handleClickSunGlasses() {
        accessory3 === 'https://i.pinimg.com/originals/51/f9/2b/51f92b674dde3b48418cb89b0cb6a963.png' ? setAccessory3('') : setAccessory3('https://i.pinimg.com/originals/51/f9/2b/51f92b674dde3b48418cb89b0cb6a963.png') 
    }

    function handleClickGoldChain() {
        accessory4 === 'https://i.pinimg.com/originals/8c/a6/98/8ca69840f85fa8ef53b4b04e131969c7.png' ? setAccessory4('') : setAccessory4('https://i.pinimg.com/originals/8c/a6/98/8ca69840f85fa8ef53b4b04e131969c7.png') 
    }

    function handleClickChoker() {
        accessory4 === 'https://avatanplus.com/files/resources/original/57ee6ddb642cf1577b5d2112.png' ? setAccessory4('') : setAccessory4('https://avatanplus.com/files/resources/original/57ee6ddb642cf1577b5d2112.png') 
    }

    function handleClickCross() {
        accessory4 === 'https://officialpsds.com/imageview/7z/6v/7z6v3p_large.png?1521316489' ? setAccessory4('') : setAccessory4('https://officialpsds.com/imageview/7z/6v/7z6v3p_large.png?1521316489') 
    }

    function handleClick() {

    }

    return (
        <>
        <div className="game1-play">
        <label for="name">What's their name?</label>
        <input
                placeholder="Your Pet's Name..."
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
        />
        <label for="comment">A comment from your pet?...</label>
        <input
                max-length="50"
                placeholder="Comment..."
                type="text"
                value={petComment}
                onChange={(e) => {setPetComment(e.target.value)}}
        />
        <div className="selections">
            <img onClick={handleClickTiger} className="select-pet" src="https://i.pinimg.com/originals/95/cc/5a/95cc5a0cd19bc28a9fae5273a6ec8a28.png" alt="tiger"/>
            <img onClick={handleClickSadCat} className="select-pet" src="https://cdn160.picsart.com/upscale-235969073088212.png?r1024x1024" alt="tuxedo cat"/>
            <img onClick={handleClickRagdoll} className="select-pet" src="https://www.sloppykisscards.com/images/byo/breeds/cat/greyragdoll.png" alt="siamese cat"/>
        </div>
        <div className="selections">
            <img onClick={handleClickAngelWings} className="select-accessory" src='https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png' alt="wings"/>
            <img onClick={handleClickFairyWings} className="select-accessory" src='https://www.pngarts.com/files/7/Fairy-Wings-PNG-Image-Transparent-Background.png' alt="wings"/>
            <img onClick={handleClickBugWings} className="select-accessory" src='https://www.pngarts.com/files/7/Realistic-Fairy-Wings-PNG-Image-Transparent-Background.png' alt="wings"/>
            <img onClick={handleClickCommunistHat} className="select-accessory" src='https://cdn140.picsart.com/254339484017212.png?r1024x1024' alt="hat"/>
            <img onClick={handleClickFedora} className="select-accessory" src='http://www.pngmart.com/files/3/Fedora-PNG-Pic.png' alt="hat"/>
            <img onClick={handleClickCowboyHat} className="select-accessory" src="https://clipartix.com/wp-content/uploads/2019/02/cowboy-hat-transparent-2019-38.png" alt="hat"/>
            <img onClick={handleClickGreyGlasses} className="select-accessory" src="http://3.bp.blogspot.com/-V_Q4gOLNA4A/U6eR3AqpYeI/AAAAAAAAFhc/oVrngT9PtaU/s1600/glasses_001_o.png" alt="glasses"/>
            <img onClick={handleClickGoldGlasses} className="select-accessory" src="http://cdn140.picsart.com/279872651005211.png" alt="glasses"/>
            <img onClick={handleClickSunGlasses} className="select-accessory" src="https://i.pinimg.com/originals/51/f9/2b/51f92b674dde3b48418cb89b0cb6a963.png" alt="glasses"/>
            <img onClick={handleClickGoldChain} className="select-accessory" src="https://i.pinimg.com/originals/8c/a6/98/8ca69840f85fa8ef53b4b04e131969c7.png" alt="necklace"/>
            <img onClick={handleClickChoker} className="select-accessory" src="https://avatanplus.com/files/resources/original/57ee6ddb642cf1577b5d2112.png" alt="necklace"/>
            <img onClick={handleClickCross} className="select-accessory" src="https://officialpsds.com/imageview/7z/6v/7z6v3p_large.png?1521316489" alt="necklace"/>
        </div>
        </div>
        <div className="preview">
            <h2>{petName}</h2>
            <img className={petClass} src={pet} alt=""/>
            <img className={`wings-${petClass}`} src={accessory1} alt=""/>
            <img className={`hat-${petClass}`} src={accessory2} alt=""/>
            <img className={`glasses-${petClass}`} src={accessory3} alt=""/>
            <img className={`necklace-${petClass}`} src={accessory4} alt=""/>
            <p>"{petComment}" <br/> -{petName}</p>
        </div>
        <button onClick={handleClick}>Adopt!</button>
        </>
    )

}