import React from "react";
import Menu from "./Menu";


function teste(id) {
    console.log("boa noite", id)
}




function Home() {

    let _id = 1
    let _id2 = 2
    return (
        <div>
            <Menu />

            <div className='titleRegister bg-light text-dark fs-3 fw-light p-3 mb-2  border-bottom border-2 border-secondary rounded-3 '>
                Bem Vindo ao Sistema!
            </div>


            <table>

                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox"></input></th>
                        <th scope="col">Id</th>
                        <th scope="col">Status</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>

                <tbody>
                    <tr id={_id} onDoubleClick={()=>{teste(_id)}}>
                        <td scope="col"><input type="checkbox"></input></td>
                        <td scope="col">Id</td>
                        <td scope="col">Status</td>
                        <td scope="col">Nome</td>
                    </tr>
                    <tr id={_id2} onDoubleClick={()=>{teste(_id2)}}>
                        <td scope="col"><input type="checkbox"></input></td>
                        <td scope="col">Id</td>
                        <td scope="col">Status</td>
                        <td scope="col">Nome</td>
                    </tr>
                </tbody>
            </table>
        </div>



    );

}
export default Home;