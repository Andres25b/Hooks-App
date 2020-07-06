import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './css/style.css';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
    const {name, birthday, img, occupation} = !!data && data[0];

    // console.log(data);

    return (
        <div className=" mt-4">
            <h1>BreakingBad Characters</h1>
            <hr/>

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-4 ">
                                    <div className="card">
                                        <img src={img} className="card-img-top" alt="name"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                <p className="card-text mb-0"><span className="font-weight-bold">Birthday:</span></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="card-text mb-0">{birthday}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="font-weight-bold mb-0">Occupation: </p>
                                                </div>
                                                <div className="col-md-6">
                                                    {
                                                        occupation.map(o => {
                                                            return(
                                                                <p key={o} className="card-text mb-0">{o}</p>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" onClick={increment}>Siguiente character</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
            }

        </div>
    )
}
