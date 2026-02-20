
const PaginaTest = async ({params}) => {

    const {id} = await params;

    return (<h1>Pagina de Test {id}</h1>);

}

export default PaginaTest;