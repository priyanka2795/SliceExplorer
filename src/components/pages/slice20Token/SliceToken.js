
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table ,Spinner} from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Web3 } from "../../../Web3Provider";

function SliceToken() {
    let address = "0xA52EC1AfAddA61f22312a070ae661aA1B9693762"
    const [contractAddress, setContractAddress] = useState([]);
    const [loading ,setLoading] = useState(false);






    useEffect(() => {
        setLoading(true)
        Web3.eth.getBlockNumber()
            .then((allBlock) => {
                if (allBlock) {
                    for (let i = 0; i < allBlock; i++) {
                        try {
                            Web3.eth.getBlock(i)
                                .then((getTransactions) => {
                                    if (getTransactions.transactions.length > 0) {
                                        for (let i = 0; i < getTransactions.transactions.length; i++) {
                                            Web3.eth.getTransaction(getTransactions.transactions[i]).then((contractAdd) => {
                                                //   console.log("contractAdd",contractAdd.to);
                                                if (contractAdd.to === null) {
                                                    Web3.eth.getTransactionReceipt(contractAdd.hash)
                                                        .then((e) => {
                                                            setContractAddress(address => [e.contractAddress, ...address])
                                                            setLoading(false)
                                                        })
                                                        .catch((err) => {
                                                            console.log("err", err)
                                                        })
                                                }
                                            })
                                        }
                                    } else {
                                    }
                                }).catch(e => console.log("my e", e))
                        } catch (error) {
                            console.log('catch', error, error);
                        }
                    }
                }
            });
    }, [])



    return (
        <>

       
            <section className='account_details py-3'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='account_head'>Token Tracker</div>
                            <hr />

                            {loading ?
                             <>
                             <div className='account_table_loading'>
                             <Spinner animation="border" variant="primary" size="sm" />
                             </div>
                           
                             </>
                             : 
                             <>
                                    <div className='account_table'>
                                <div className='ps-3 mb-3'>Slice-20 Tokens</div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className='table_headings'>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Symbol</th>
                                            <th>Decimal</th>
                                            <th>Contract Address</th>
                                            <th>Total Supply</th>
                                            <th>Holders</th>
                                        </tr>
                                    </thead>
                                    {contractAddress ? contractAddress.map((e,index) => {
                                        return (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div>{index + 1}</div>
                                                        </td>
                                                        <td>
                                                            <div>---- </div>
                                                        </td>
                                                        <td>
                                                            <div>---</div>
                                                        </td>
                                                        <td>
                                                            <div>---</div>
                                                        </td>
                                                        <td>
                                                            <div><Link to={`/address/${e}`}>{e.slice(0, 4)}....{e.slice(-4, e.length)}</Link></div>
                                                        </td>
                                                        <td>
                                                            <div>---</div>
                                                        </td>
                                                        <td>
                                                            <div>---</div>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </>
                                        )

                                    }) : <></>}

                                </Table>

                                {/* <div className="pagination_div">
                                    <div className='show_count'>
                                        show &nbsp;<span>10</span>&nbsp; Records
                                    </div>
                                    <div className="paginate_count">
                                        <span>First</span>&nbsp;&nbsp;
                                        <span><FaAngleLeft /></span>&nbsp;&nbsp;
                                        <span>1 of 200</span>&nbsp;&nbsp;
                                        <span><FaAngleRight /></span>&nbsp;&nbsp;
                                        <span>Last</span>
                                    </div>
                                </div> */}
                            </div>
                             </>
                             }
                     
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SliceToken
