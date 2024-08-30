const Calcf1 = () => {
    return(
        <div>
            <div>
                <h1>
                    O médico prescreveu 1,5 mg de cloranfenicol. Mas o medicamento que existe na farmácia é de 1 ml, contendo 2 mg. Como proceder?
                </h1>
            </div>
            <div>
                <h4>Converta as unidades</h4>
            </div>
            <div>
                <input type="text" placeholder="cloranfenicol/mg"/>
                <input type="text" placeholder="Diluente" />
                <input type="text" placeholder="gotas"/>
            </div>
            <div>
                <input type="text" placeholder="cloranfenicol/mg"/>
                <input type="text" placeholder="Diluente" />
                <input type="text" placeholder="gotas"/>
            </div>
            <div>
                <input type="text" hidden/>
                <input type="text" placeholder="Diluente" />
                <input type="text" placeholder="gotas"/>
            </div>
        </div>
    )
}

export default Calcf1;