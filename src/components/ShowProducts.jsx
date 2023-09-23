import { useEffect, useState } from "react"

export function ShowProducts(){
    const url = "";

    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    const getProducts = async () => {
        const repuesta = await axios.get(url);
        setProducts(repuesta.data);
    }

    useEffect( () => {
        getProducts();
    })

    return(
        <div>
            <h1>{title}</h1>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="d-grid mx-auto">
                            <button className="btn btn-dark" data-bs-toggle='modal' data-bs-target="#modalProducts">
                                <i className="fa-solid fa-circle-plus"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade">
                
            </div>
        </div>
    )
}