import React, { useState, useEffect } from 'react'
import { Button, Card, Grid, Image, Input, InputNumber, Spin } from 'antd'
import { Row, Col, Container } from 'reactstrap'
import { CardItem, Header } from '../components'
import { useRouter } from 'next/router'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


const { useBreakpoint } = Grid


const coinsStock = [
    { value: 1, stock: 10 },
    { value: 5, stock: 10 },
    { value: 10, stock: 10 },
    { value: 20, stock: 10 },
    { value: 50, stock: 10 },
    { value: 100, stock: 10 },
    { value: 500, stock: 10 },
    { value: 1000, stock: 10 }
]


const Product = () => {
    const { xs: isMobile, md: screenMD, xl: screenLabtop } = useBreakpoint()
    const [apiTest, setApiTest] = useState({
        id: 1,
        title: 'เป๊ปซี่กระป๋อง',
        titleDetails: 'ขนาด 245 มิลลิลิตร',
        details: 'ผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้นผลิตด้วยเทคโนโลยีที่สะอาดและทันสมัย ดับความกระหาย เติมความสดชื่นให้กับตัวคุณเครื่องดื่มอัดลม ที่สุดแห่งความซ่าส์ นาทีนี้เป๊ปซี่เท่านั้น',
        price: 12.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10

    })
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [itemCount, setItemCount] = useState(1)
    const [price, setPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [amountPrice, setAmountPrice] = useState(0)
    const [moneyChange, setMoneyChange] = useState(0)


    const actionLink = () => {
        router.push({
            pathname: '/home',
            query: { id }
        })
    }

    useEffect(() => {
        setPrice(apiTest.price)
        setTotalPrice(apiTest.price)
    }, [])


    const actionCal = isAdd => {
        const sum = isAdd ? itemCount + 1 : itemCount === 1 ? 1 : itemCount - 1
        if (isAdd) setItemCount(sum)
        else setItemCount(sum)
        const cal = sum * price
        setTotalPrice(cal)
    }

    const actionPay = () => {
        setLoading(true)
        const changeTotol = amountPrice - totalPrice
        const stockCal = apiTest.stock - itemCount
        setMoneyChange(changeTotol)
        setApiTest({
            ...apiTest,
            stock: stockCal
        })

        setTimeout(() => {
            setLoading(false)
            // clearPay()
        }, 1000);

    }

    const clearPay = () => {
        setItemCount(1)
        setPrice(apiTest.price)
        setAmountPrice(0)
        setMoneyChange(0)
    }

    const actionSum = value => {
        const sum = amountPrice + value
        setAmountPrice(sum)
    }


    return (
        <div className="bg-stone-200 pb-8">
            <Spin spinning={loading}>
                <Header backDisible />
                <Container >
                    <div className="mt-8 shadow-md" >
                        <Card >
                            <Row>
                                <Col md={5} xs={12} >
                                    <Image
                                        src={apiTest.img}
                                        // height="36rem"
                                        preview={false}
                                        alt={apiTest.title}
                                    />
                                </Col>
                                <Col md={7} xs={12} >
                                    <div className="text-5xl font-semibold text-center">{apiTest.title}</div>
                                    <div className="text-3xl font-semibold ">{apiTest.titleDetails}</div>
                                    <div
                                        id="scrollableDiv"
                                        style={{
                                            height: '12rem',
                                            overflow: 'auto',
                                            // padding: '0 16px',
                                        }}
                                    >
                                        <div className="text-2xl font-normal">{apiTest.details}</div>
                                    </div>
                                    <div className="p-4 mt-7">
                                        <Row>
                                            <Col md={12} lg={6} xs={12} className="text-center font-bold text-xl">
                                                <div className="">จำนวน</div>
                                                <MinusOutlined
                                                    style={{ fontSize: 30 }}
                                                    onClick={() => actionCal(false)}
                                                />
                                                <InputNumber size="large" value={itemCount} readOnly={true} />
                                                <PlusOutlined
                                                    style={{ fontSize: 30 }}
                                                    onClick={() => actionCal(true)}
                                                />
                                            </Col>
                                            <Col md={12} lg={6} xs={12} className={isMobile ? "text-center font-bold text-xl mt-3" : "text-center font-bold text-xl"} >
                                                <div className="">ราคา</div>
                                                <InputNumber size="large" value={totalPrice} readOnly={true} />
                                            </Col>
                                        </Row>
                                        <div className="mt-5 text-center">
                                            <Button
                                                type="primary"
                                                shape="round"
                                                className="w-60"
                                                onClick={() => actionPay()}
                                                disabled={amountPrice <= totalPrice}>
                                                จ่ายเงิน
                                            </Button>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    </div>

                    <div className="mt-8 shadow-md" >
                        <Card >
                            <div className=" text-4xl text-center">TEST INPUT</div>
                            <div className=" text-4xl text-center">{`จำนวนเงินที่ผู้ใช้ใส่ ${amountPrice}`}</div>
                            <div className=" text-4xl text-center">{`จำนวนเงินถอน ${moneyChange}`}</div>
                            <div className=" text-4xl text-center">{`จำนวนสินค้าที่เหลือ ${apiTest.stock}`}</div>
                            <Row>
                                {
                                    coinsStock.map(item =>
                                        <Col md={2} xs={6} key={item.value} className="mt-3">
                                            <Button onClick={() => actionSum(item.value)} className="">
                                                {`${item.value} บาท  คงเหลือ  ${item.stock}`}
                                            </Button>
                                        </Col>
                                    )
                                }
                            </Row>

                        </Card>
                    </div>
                </Container>
            </Spin>
        </div>
    )
}

export default Product
