import Button from '../../components/UI/button/button'
import Header from '../../components/header/Header'
import Input from '../../components/UI/input/input'
import './Home.css'
import FormCreateParkSlot from '../../components/UI/input/input'

export default function home() {
    return (
        <div>
            <Header />
            <div class="window"> 
                <FormCreateParkSlot />
                <Button/>
            </div>
             

        </div>
    )
}