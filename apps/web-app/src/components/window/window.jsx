 <div>
            <Header />
            <div className="window"> 
                <label>Localisation</label>
                <Input placeholder="Rue, gare, aéroport"/>

                <label>Début</label>
                <div className="time-inputs">
                    <Input placeholder="début"/>
                    <Input placeholder="heure"/>
                </div>

                <label>Fin</label>
                <div className="time-inputs">
                    <Input title="Fin" placeholder="Fin"/>
                    <Input placeholder="heure"/>
                </div>

                <label>Type de véhicule</label>
                <select>
                    <option value="small">Petit, Citadine</option>
                    // Vous pouvez ajouter d'autres options si nécessaire
                </select>

                <Button>Crée une place</Button>
            </div>
        </div>
    );
    );