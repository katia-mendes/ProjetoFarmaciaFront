import React from "react";

function Home() {
    return (
        <>
    
            <div className="bg-red-900 flex justify-center py-4">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl text-black font-bold">Olá, seja bem vinde!</h2>
                        <p className="text-xl text-black">Conte-nos mais</p>

                        <div className="flex justify-around gap-4">
                            <button className="rounded bg-white text-blue-800 py-2 px-4">
                                Ver Produtos
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F39%2F25%2F51%2F3925517292d5f871815ccdeae24beec9.jpg&tbnid=Ca2riTQ8HtGJyM&vet=12ahUKEwjZnv6UhtiCAxWWUbgEHXvbAsAQMygEegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F779474647981491544%2F&docid=uq69615Ey1OTUM&w=800&h=655&q=farmacia%20imagem%20animada&ved=2ahUKEwjZnv6UhtiCAxWWUbgEHXvbAsAQMygEegQIARBW"
                            alt="A generic image representing a pharmacy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;