import React from "react"
import Card from "./Card"

const CardList = ({ robots }) => {

    if (0) {
        // simulate an error
        throw new Error("Random error!!!!")
    }
    
    console.log(`CardList`)
    return (
        <div>
            {
                robots.map(user => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList