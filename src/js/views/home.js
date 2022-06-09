import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import {Context} from "../store/appContext"


export const Home = () => {
  const {store, actions} = useContext(Context)
	return (
		<div className="container">
			<div className="d-flex flex-wrap">
				{store.characters.map(
					(character, index) => {
						return (
							<Card 
								key={character.id}
								item={character}
							/>
						)
					}
				)}
			</div>
		</div>		
	)
};
