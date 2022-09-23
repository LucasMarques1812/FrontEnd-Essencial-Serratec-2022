try {
    let preco = -1;
    //Exception que está prevista
    if (preco < 0){
        throw new Error();
    }
    console.log(num);
} catch (error) {
    console.log("Erro! Programa abortado!");
    console.log("Erro:"+ error.message);
}finally{
    console.log("Programa finalizado com sucesso !");
}