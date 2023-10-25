import Button from '../../components/UI/button/button'
import Header from '../../components/header/Header'
import Input from '../../components/UI/input/input'
import './Home.css'

export default function home() {
    return (
        <div>
            <Header />
            <div class="window"> 
                <Input title="Localisation :" placeholder="rue, aéroport" maxLength="50" />
                <Input title="Début :" placeholder="début"/>
                <Input title="Fin :" placeholder="fin"/>
                <Input title="Type de véhicule :" placeholder="citadine, camion"/>
                <Button/>
            </div>
             

        </div>
    )
}