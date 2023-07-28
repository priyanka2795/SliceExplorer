import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Tooltip, OverlayTrigger, Tabs, Tab, Accordion } from 'react-bootstrap'
import { FaCheckCircle, FaRegMap, FaChessBoard, FaCopy, FaSitemap } from 'react-icons/fa'
import { BsFileEarmarkCode, BsListCheck } from 'react-icons/bs'
import { BiCodeAlt } from 'react-icons/bi'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Web3 } from '../../../Web3Provider'
import { useLocation, Link } from 'react-router-dom'
import web3 from "web3"

function Contract({ addressData }) {
  const web3_slice = new web3(window.ethereum);

  const [copyTextSourceCode, setCopyTextSourceCode] = useState("Copy source code to clipboard")
  const [copyTextABI, setCopyTextABI] = useState("Copy ABI to clipboard")
  // ======tooltip function start=======
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyTextSourceCode}
    </Tooltip>
  );
  const renderTooltipABI = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyTextABI}
    </Tooltip>
  );
  // ======tooltip function end=======
  const handleSourceCopy = () => {
    setCopyTextSourceCode("Copied.")
  }
  const handleABICopy = () => {
    setCopyTextABI("Copied.")
  }
  // ==================================================================================
  const [CreationCode, setCreationCode] = useState('')
  const location = useLocation()
  const contractAddressString = location.pathname.split('/address/')[1]
  // console.log(contractAddressString);
  Web3.eth.getCode(contractAddressString).then(e => {
    setCreationCode(e)
  })


  const abiString = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newSale",
          "type": "uint256"
        }
      ],
      "name": "changeSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_new",
          "type": "bool"
        }
      ],
      "name": "changeState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_numTokens",
          "type": "uint256"
        }
      ],
      "name": "pancakeswapLiquidityTokenProvider",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_numTokens",
          "type": "uint256"
        }
      ],
      "name": "purchaseToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "rewardMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakingContract",
          "type": "address"
        }
      ],
      "name": "setStakingContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_numTokens",
          "type": "uint256"
        }
      ],
      "name": "teamTokenProvider",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ecosystemCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pancakeswapLiquidityCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "perTokenPrivatePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "perTokenPublicPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "perTokenSeedPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "privateCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "publicCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "seedCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stage",
      "outputs": [
        {
          "internalType": "enum BharatToken.sale",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "teamCurrentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  // console.log(abiString);

  // ========================================= Filtered ABI ======================================================
  const [GetFunctionsName, setGetFunctionsName] = useState([])
  const [GetWriteFunction, setGetWriteFunction] = useState([])

  useEffect(() => {
    abiString.map(e => {
      if (e.stateMutability === 'nonpayable' || e.stateMutability === 'payable') {
        if (e.name !== undefined) {
          // console.log("write", e.name);
          setGetWriteFunction(b => [e, ...b])
        }
      }

      if (e.stateMutability === 'view') {
        // console.log("read", e);
        setGetFunctionsName(a => [e, ...a])
      }

    })
  }, [])

  // console.log("GetFunctionsName", GetFunctionsName);
  // console.log("GetWriteFunction", GetWriteFunction);


  // ======================================================== With Value CAll ================================================
  const [ReadArr1, setReadArr1] = useState([])
  const [ReadArr2, setReadArr2] = useState([])
  useEffect(() => {

    for (let index = 0; index < GetFunctionsName.length; index++) {

      if (GetFunctionsName[index].inputs.length === 0) {
        getFunctionName(GetFunctionsName[index].name + '()').then(e => {
          const obj = {
            funcName: GetFunctionsName[index].name + '()',
            funcVal: e,
            input: []
          }
          setReadArr1(a => [obj, ...a])
        })
      }

      if (GetFunctionsName[index].inputs.length > 0) {
        const obj = {
          funcName: GetFunctionsName[index].name + '()',
          funcVal: null,
          input: GetFunctionsName[index].inputs
        }
        setReadArr2(b => [obj, ...b])
      }

    }

  }, [GetFunctionsName])


  const [WriteArr, setWriteArr] = useState([])
  useEffect(() => {
    for (let i = 0; i < GetWriteFunction.length; i++) {

      if (GetWriteFunction[i]) {
        const obj = {
          funcName: GetWriteFunction[i].name + '()',
          funcVal: null,
          input: GetWriteFunction[i].inputs
        }
        setWriteArr(b => [obj, ...b])
      }
    }
  }, [GetWriteFunction])

  // console.log("WriteArr", WriteArr);
  // console.log('ReadArr1', ReadArr1);
  // console.log('ReadArr2', ReadArr2);
  const AllReadFunc = ReadArr1.concat(ReadArr2)


  async function getFunctionName(e) {
    const ReadSlice_Web3 = new Web3.eth.Contract(abiString, contractAddressString)
    const one = `ReadSlice_Web3.methods.${e}.call()`
    const val = await eval(one);
    return val
  }

  async function queryFunction(e, params) {
    const inputs = e.target.parentElement.getElementsByClassName('query_params_val')
    // console.log("params", params, inputs);
    let text = ',';
    let check = '';
    for (let i = 0; i < inputs.length; i++) {
      // console.log(inputs[i].value);
      check += text.concat(`"${inputs[i].value}"`)
    }
    let filteredParameter = check.slice(1);
    let functionNameWithPara = params.split('()')[0] + `(${filteredParameter})`;
    // console.log(functionNameWithPara);

    // =============================== Call Dynamic Function with Parameter ======================
    const ReadSlice_Web3 = new Web3.eth.Contract(abiString, contractAddressString)

    const one = `ReadSlice_Web3.methods.${functionNameWithPara}.call()`
    // console.log("===============================>",one);
    const readContract_errorDiv = e.target.parentElement.getElementsByClassName('readContract_error')
    const resultDiv = e.target.parentElement.getElementsByClassName('result')

    try {
      const val = await eval(one);
      // console.log("===============================>", val);
      // ====================================== showing result ==================================
      resultDiv[0].innerText = `Method Response: ${val}`
      // console.log("resultDiv", resultDiv);
      readContract_errorDiv[0].innerText = ''
    } catch (error) {
      resultDiv[0].innerText = ''
      // console.log("catch", error);
      const stringError = JSON.stringify(error);
      // console.log('stringError', stringError);
      readContract_errorDiv[0].innerText = `Error : ${stringError}`
      // setTimeout(() => {
      //   resultDiv[0].innerText = ''
      // }, 2000)
    }
  }

  // ====================================================== Write Contract Sections =================================================
  //=========================== Connect to MetaMask Wallet =======================
  const [MetaMaskString, setMetaMaskString] = useState({
    fullAddress: null,
    AddrString: 'Connect to MetaMask'
  })
  async function openMetaMask(e) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const firstSlice = account.slice(0, 5)
    const secondSlice = account.slice(-5)
    const userAddress = 'Connected to ' + firstSlice + '...' + secondSlice
    // console.log("account", account, userAddress);
    setMetaMaskString(
      {
        fullAddress: account,
        AddrString: userAddress
      }
    )
    e.target.style.backgroundColor = '#faebd7'
    e.target.style.color = '#763d1c'
    e.target.style.border = '1px solid #f68630'
  }

  const [WriteResult, setWriteResult] = useState({
    state: false,
    transactionHash: null,
    id: null
  })

  async function writeFunction(e, params) {
    // console.log("MetaMaskString", MetaMaskString.fullAddress);
    // ====================================== showing MetaMask Error ==================================
    if (MetaMaskString.fullAddress === null) {
      const resultDiv = e.target.parentElement.getElementsByClassName('metaMask_error')
      resultDiv[0].innerText = `Connect To MetaMask`
      setTimeout(() => {
        resultDiv[0].innerText = ''
      }, 2000)
      return
    }
    // return;
    // =============================== Dynamic Function with Parameter ======================
    const inputs = e.target.parentElement.getElementsByClassName('query_params_val')
    let text = ',';
    let check = '';
    for (let i = 0; i < inputs.length; i++) {
      check += text.concat(`"${inputs[i].value}"`)
    }
    let filteredParameter = check.slice(1);
    let functionNameWithPara = params.split('()')[0] + `(${filteredParameter})`;
    // ======================================================= SEND Write Contract Function ==================================================
    const SliceABiWthiCONTRACT = new web3_slice.eth.Contract(abiString, contractAddressString);
    const write = `SliceABiWthiCONTRACT.methods.${functionNameWithPara}`
    console.log('yes22222222222222222222222222', write)

    const writeContract_errorDiv = e.target.parentElement.getElementsByClassName('writeContract_error')

    try {

      const val = await eval(write)
      val.send({
        from: MetaMaskString.fullAddress
      }).then(function (info) {
        console.log('yes', info, info.transactionHash)
        setWriteResult({
          state: true,
          transactionHash: info.transactionHash,
          id: e.target.id
        })
      }).catch((err) => {
        console.log("no", err);
      })

      writeContract_errorDiv[0].innerText = ''
    } catch (error) {
      console.log("write catch", error);
      const stringError = JSON.stringify(error);
      // console.log('stringError', stringError);
      writeContract_errorDiv[0].innerText = `Error : ${stringError}`
    }
  }

  useEffect(() => {
    window.ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log("changed", accounts[0]);
    })
  },)
  


  return (
    <>

      <section className='contract_wrap'>
        <div id='test'></div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='my-4 inner_tabs_of_contract'>
                <Tabs
                  defaultActiveKey="Code"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Code" title="Code">
                    <div className='contract_content'>
                      <div className='contract_head'><FaCheckCircle /> Contract Source Code Verified <span>(Exact Match)</span></div>
                      <div className='contract_info'>
                        <Row>
                          <Col lg="6">
                            <Row>
                              <Col lg={4}>
                                <div>Contract Name:</div>
                              </Col>
                              <Col lg={8}>
                                <div><strong>{addressData.ContractName}</strong></div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <Row>
                              <Col lg={4}>
                                <div>Optimization Enabled:</div>
                              </Col>
                              <Col lg={8}>
                                <div><strong>{addressData.OptimizationUsed == 0 ? "Yes" : "No"}</strong> with <strong>200</strong> runs</div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col lg="6">
                            <Row>
                              <Col lg={4}>
                                <div>Compiler Version</div>
                              </Col>
                              <Col lg={8}>
                                <div><strong>{addressData.CompilerVersion}</strong></div>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <Row>
                              <Col lg={4}>
                                <div>Other Settings:</div>
                              </Col>
                              <Col lg={8}>
                                <div><strong>{addressData.EVMVersion}</strong> evmVersion, <strong>{addressData.LicenseType}</strong> <a href='#'>license</a></div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>

                      <div className='contract_div'>
                        <div className='contract_head'><BsFileEarmarkCode className='icons' /> Contract Source Code <span>(Solidity)</span></div>
                        <div className='source_code_copy'>

                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 300 }}
                            overlay={renderTooltip}
                          >
                            <CopyToClipboard text={addressData.SourceCode}>
                              <button className='btn btn-secondary' onClick={handleSourceCopy}><FaCopy /></button>
                            </CopyToClipboard>
                          </OverlayTrigger>

                        </div>
                      </div>
                      <textarea className='contract_source_code form-control mt-3 mb-5' rows="12" value={addressData.SourceCode} >

                      </textarea>

                      <div className='contract_div'>
                        <div className='contract_head'><BsListCheck className='icons' /> Contract ABI</div>
                        <div className='contract_abi_copy'>
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 300 }}
                            overlay={renderTooltipABI}
                          >
                            <CopyToClipboard text={addressData.ABI}>
                              <button className='btn btn-secondary' onClick={handleABICopy}><FaCopy /></button>
                            </CopyToClipboard>
                          </OverlayTrigger>
                        </div>
                      </div>
                      <div className='contract_abi_div'>{addressData.ABI}</div>

                      <div className='contract_head'><BiCodeAlt className='icons' /> Contract Creation Code</div>
                      <div className='contract_creation_div'>{CreationCode}</div>
                      {addressData.ConstructorArguments &&
                        <div>
                          <div className='contract_head'><FaSitemap className='icons' /> Constructor Arguments <span>(ABI-Encoded and is the last bytes of the Contract Creation Code above)</span></div>
                          <teatarea className='contract_creation_div mt-3 mb-5' rows="10" value={addressData.ConstructorArguments}></teatarea>
                        </div>

                      }


                      <div className='contract_head'><FaRegMap className='icons' /> Deployed ByteCode Sourcemap</div>
                      <div className='deploy_bytecode_div'>
                        1::-;10415:4;10457:3;10446:9;10442:19;10434:27;;-1:-1:-1;;;;;10560:2:1;10551:6;10545:13;10541:22;10530:9;10523:41;10632:2;10624:4;10616:6;10612:17;10606:24;10602:33;10595:4;10584:9;10580:20;10573:63;10683:4;10675:6;10671:17;10665:24;10725:1;10721;10716:3;10712:11;10708:19;10783:2;10769:12;10765:21;10758:4;10747:9;10743:20;10736:51;10855:2;10847:4;10839:6;10835:17;10829:24;10825:33;10818:4;10807:9;10803:20;10796:63;;;10927:2;10919:4;10911:6;10907:17;10901:24;10897:33;10890:4;10879:9;10875:20;10868:63;;10980:4;10972:6;10968:17;10962:24;10995:73;11062:4;11051:9;11047:20;11031:14;10995:73;:::i;:::-;;10263:811;;;;:::o;11615:321::-;11683:6;11691;11744:2;11732:9;11723:7;11719:23;11715:32;11712:52;;;11760:1;11757;11750:12;11712:52;11783:29;11802:9;11783:29;:::i;:::-;11773:39;;11862:2;11851:9;11847:18;11834:32;11875:31;11900:5;11875:31;:::i;:::-;11925:5;11915:15;;;11615:321;;;;;:::o;12856:753::-;-1:-1:-1;;;;;13267:15:1;;;13249:34;;13319:15;;;13314:2;13299:18;;13292:43;-1:-1:-1;;;;;13409:15:1;;;13404:2;13389:18;;13382:43;13461:15;;13456:2;13441:18;;13434:43;13514:15;;13508:3;13493:19;;13486:44;13183:3;13168:19;;13539:64;13362:3;13583:19;;13575:6;13539:64;:::i;:::-;12856:753;;;;;;;;;:::o;13614:247::-;13673:6;13726:2;13714:9;13705:7;13701:23;13697:32;13694:52;;;13742:1;13739;13732:12;13694:52;13781:9;13768:23;13800:31;13825:5;13800:31;:::i;13866:356::-;14068:2;14050:21;;;14087:18;;;14080:30;14146:34;14141:2;14126:18;;14119:62;14213:2;14198:18;;13866:356::o;15139:355::-;15341:2;15323:21;;;15380:2;15360:18;;;15353:30;15419:33;15414:2;15399:18;;15392:61;15485:2;15470:18;;15139:355::o;15722:251::-;15792:6;15845:2;15833:9;15824:7;15820:23;15816:32;15813:52;;;15861:1;15858;15851:12;15813:52;15893:9;15887:16;15912:31;15937:5;15912:31;:::i;17396:184::-;17466:6;17519:2;17507:9;17498:7;17494:23;17490:32;17487:52;;;17535:1;17532;17525:12;17487:52;-1:-1:-1;17558:16:1;;17396:184;-1:-1:-1;17396:184:1:o;17585:349::-;17787:2;17769:21;;;17826:2;17806:18;;;17799:30;17865:27;17860:2;17845:18;;17838:55;17925:2;17910:18;;17585:349::o;17939:127::-;18000:10;17995:3;17991:20;17988:1;17981:31;18031:4;18028:1;18021:15;18055:4;18052:1;18045:15;18071:151;18161:4;18154:12;;;18140;;;18136:31;;18179:14;;18176:40;;;18196:18;;:::i;:::-;18071:151;;;;:::o;18227:128::-;18294:9;;;18315:11;;;18312:37;;;18329:18;;:::i;18360:168::-;18400:7;18466:1;18462;18458:6;18454:14;18451:1;18448:21;18443:1;18436:9;18429:17;18425:45;18422:71;;;18473:18;;:::i;:::-;-1:-1:-1;18513:9:1;;18360:168::o;18533:217::-;18573:1;18599;18589:132;;18643:10;18638:3;18634:20;18631:1;18624:31;18678:4;18675:1;18668:15;18706:4;18703:1;18696:15;18589:132;-1:-1:-1;18735:9:1;;18533:217::o;18755:375::-;-1:-1:-1;;;;;19013:15:1;;;18995:34;;19065:15;;;;19060:2;19045:18;;19038:43;19112:2;19097:18;;19090:34;;;;18945:2;18930:18;;18755:375::o;19135:277::-;19202:6;19255:2;19243:9;19234:7;19230:23;19226:32;19223:52;;;19271:1;19268;19261:12;19223:52;19303:9;19297:16;19356:5;19349:13;19342:21;19335:5;19332:32;19322:60;;19378:1;19375;19368:12;19417:416;-1:-1:-1;;;;;19675:15:1;;;19657:34;;19727:15;;;;19722:2;19707:18;;19700:43;-1:-1:-1;;;;;19779:47:1;;;19774:2;19759:18;;19752:75;19607:2;19592:18;;19417:416::o;20177:342::-;20379:2;20361:21;;;20418:2;20398:18;;;20391:30;-1:-1:-1;;;20452:2:1;20437:18;;20430:48;20510:2;20495:18;;20177:342::o;26571:398::-;26773:2;26755:21;;;26812:2;26792:18;;;26785:30;26851:34;26846:2;26831:18;;26824:62;-1:-1:-1;;;26917:2:1;26902:18;;26895:32;26959:3;26944:19;;26571:398::o;26974:408::-;27176:2;27158:21;;;27215:2;27195:18;;;27188:30;27254:34;27249:2;27234:18;;27227:62;-1:-1:-1;;;27320:2:1;27305:18;;27298:42;27372:3;27357:19;;26974:408::o;27746:315::-;-1:-1:-1;;;;;27938:32:1;;;;27920:51;;-1:-1:-1;;;;;28007:47:1;28002:2;27987:18;;27980:75;27908:2;27893:18;;27746:315::o;28778:955::-;28998:4;29046:3;29035:9;29031:19;-1:-1:-1;;;;;29142:2:1;29134:6;29130:15;29119:9;29112:34;29165:2;29215;29207:6;29203:15;29198:2;29187:9;29183:18;29176:43;29255:3;29250:2;29239:9;29235:18;29228:31;29279:6;29268:17;;29314:6;29308:13;29345:6;29337;29330:22;29383:3;29372:9;29368:19;29361:26;;29422:2;29414:6;29410:15;29396:29;;29443:1;29453:195;29467:6;29464:1;29461:13;29453:195;;;29532:13;;-1:-1:-1;;;;;29528:39:1;29516:52;;29623:15;;;;29588:12;;;;29564:1;29482:9;29453:195;;;29457:3;;;29665;29657:11;;;;29718:6;29711:14;29704:22;29699:2;29688:9;29684:18;29677:50;28778:955;;;;;;;:::o;31204:127::-;31265:10;31260:3;31256:20;31253:1;31246:31;31296:4;31293:1;31286:15;31320:4;31317:1;31310:15;31336:135;31375:3;31396:17;;;31393:43;;31416:18;;:::i;:::-;-1:-1:-1;31463:1:1;31452:13;;31336:135::o;32176:287::-;32216:7;-1:-1:-1;;;;;32309:2:1;32306:1;32302:10;32339:2;32336:1;32332:10;32395:3;32391:2;32387:12;32382:3;32379:21;32372:3;32365:11;32358:19;32354:47;32351:73;;;32404:18;;:::i;:::-;32444:13;;32176:287;-1:-1:-1;;;;32176:287:1:o;33930:200::-;-1:-1:-1;;;;;34066:10:1;;;34054;;;34050:27;;34089:12;;;34086:38;;;34104:18;;:::i;37292:312::-;37371:6;37379;37432:2;37420:9;37411:7;37407:23;37403:32;37400:52;;;37448:1;37445;37438:12;37400:52;37480:9;37474:16;37499:31;37524:5;37499:31;:::i;:::-;37594:2;37579:18;;;;37573:25;37549:5;;37573:25;;-1:-1:-1;;;37292:312:1:o
                      </div>

                      <div className='contract_head'><FaChessBoard className='icons' /> Swarm Source</div>
                      <div className='swarm_div'>{addressData.SwarmSource}</div>
                    </div>
                  </Tab>
                  <Tab eventKey="Read Contract" title="Read Contract">
                    <div className='read_contract_section'>
                      <Accordion >
                        {AllReadFunc.map((e, key) => {
                          return <Accordion.Item eventKey={key} key={key}>
                            <Accordion.Header>{e.funcName}</Accordion.Header>
                            <Accordion.Body>
                              {e.input.length > 0 ?
                                <>
                                  <div className='parentDiv'>
                                    {e.input.map((a, key) => {
                                      return <div key={key} className="read_input_div">
                                        <div className='name_field'>{a.name} ({a.type})</div>
                                        <input className='query_params_val' type="text" placeholder={`${a.name} (${a.type})`} />
                                      </div>
                                    })}
                                    <button className='query_btn' onClick={(z) => queryFunction(z, e.funcName)}>Query</button>
                                    <div className='query_response'>
                                      <div className='result'></div>
                                      <div className='readContract_error'></div>
                                    </div>
                                  </div>
                                </>
                                : e.funcVal.toString()}
                            </Accordion.Body>
                          </Accordion.Item>
                        })}
                      </Accordion>
                    </div>
                  </Tab>
                  <Tab eventKey="Write" title="Write" >
                    <div className='write_contract_section'>
                      <button className='connect_to_web3' onClick={(e) => openMetaMask(e)}>
                        <svg version="1.1" id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 318.6 318.6"
                        >
                          <polygon className="st0" points="274.1,35.5 174.6,109.4 193,65.8 " />
                          <g>
                            <polygon className="st1" points="44.4,35.5 143.1,110.1 125.6,65.8 	" />
                            <polygon className="st1" points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7 	" />
                            <polygon className="st1" points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8 	" />
                            <polygon className="st1" points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1 	" />
                            <polygon className="st1" points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1 	" />
                            <polygon className="st1" points="106.8,247.4 140.6,230.9 111.4,208.1 	" />
                            <polygon className="st1" points="177.9,230.9 211.8,247.4 207.1,208.1 	" />
                          </g>
                          <g>
                            <polygon className="st2" points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3 	" />
                            <polygon className="st2" points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9 	" />
                          </g>
                          <polygon className="st3" points="138.8,193.5 110.6,185.2 130.5,176.1 " />
                          <polygon className="st3" points="179.7,193.5 188,176.1 208,185.2 " />
                          <g>
                            <polygon className="st4" points="106.8,247.4 111.6,206.8 80.3,207.7 	" />
                            <polygon className="st4" points="207,206.8 211.8,247.4 238.3,207.7 	" />
                            <polygon className="st4" points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2 	" />
                            <polygon className="st4" points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1 	" />
                          </g>
                          <g>
                            <polygon className="st5" points="87.8,162.1 111.4,208.1 110.6,185.2 	" />
                            <polygon className="st5" points="208.1,185.2 207.1,208.1 230.8,162.1 	" />
                            <polygon className="st5" points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7 	" />
                            <polygon className="st5" points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5 	" />
                          </g>
                          <polygon className="st6" points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 " />
                          <polygon className="st6" points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 " />
                          <polygon className="st7" points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4 
	140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 "/>
                          <polygon className="st8" points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 " />
                          <g>
                            <polygon className="st9" points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 
		281.8,129.1 275.6,124.3 283.6,118.2 	"/>
                            <polygon className="st9" points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 
		140.6,106.9 44.4,35.5 	"/>
                          </g>
                          <polygon className="st6" points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 " />
                          <polygon className="st6" points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 " />
                          <polygon className="st6" points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6 
	173.1,227.6 173.3,182.8 "/>
                        </svg>
                        {MetaMaskString.AddrString}</button>
                      <Accordion >
                        {WriteArr.map((e, key) => {
                          return <Accordion.Item eventKey={key} key={key}>
                            <Accordion.Header >{e.funcName}</Accordion.Header>
                            <Accordion.Body>

                              <div className='parentDiv'>
                                {e.input.map((a, key) => {
                                  return <div key={key} className="read_input_div">
                                    <div className='name_field'>{a.name} ({a.type})</div>
                                    <input className='query_params_val' type="text" placeholder={`${a.name} (${a.type})`} />
                                  </div>
                                })}
                                <button className='query_btn' id={key} onClick={(z) => writeFunction(z, e.funcName)}>Write</button>
                                {WriteResult.state ? WriteResult.id == key ?
                                  <Link to={`/tx/${WriteResult.transactionHash}`} className='view_trans' id={key}>View Transaction</Link>
                                  : '' : ''
                                }
                                <div className='query_response'>
                                  <div className='result'></div>
                                  <div className='metaMask_error'></div>
                                  <div className='writeContract_error'></div>
                                </div>
                              </div>

                            </Accordion.Body>
                          </Accordion.Item>
                        })}
                      </Accordion>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contract
