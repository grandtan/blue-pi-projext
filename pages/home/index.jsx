import React, { useEffect, useState } from 'react'
import { Button, Segmented } from 'antd'
import { Row, Col, Container } from 'reactstrap'
import { CardItem, Header } from '../components'

    ;
const apiTest = [
    {
        id: 1,
        title: 'เป๊ปซี่กระป๋อง',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 12.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 0
    },
    {
        id: 2,
        title: 'คาราเมลโกโก้เย็น',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 60.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 3,
        title: 'นมชมพู',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 45.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 0
    },
    {
        id: 4,
        title: 'นมสดสตรอว์เบอร์รี',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 40.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 5,
        title: 'มอคค่า',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 35.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 6,
        title: 'เป๊ปซี่กระป๋อง',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 12.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 7,
        title: 'คาราเมลโกโก้เย็น',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 60.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 8,
        title: 'นมชมพู',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 45.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 9,
        title: 'นมสดสตรอว์เบอร์รี',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 40.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    },
    {
        id: 10,
        title: 'มอคค่า',
        details: 'ขนาด 245 มิลลิลิตร',
        price: 35.00,
        img: 'https://i.ibb.co/KhYt8Dg/070774838-P.jpg',
        stock: 10
    }
]


const apiMenu = [
    { label: 'แนะนำ', value: 1 },
    { label: 'นํ้าอัดลม', value: 2 },
    { label: 'กาแฟ', value: 3 },
    { label: 'ชา', value: 4 },
    { label: 'นํ้าผลไม้', value: 5 },
]

const Home = () => {

    const [menu, setMenu] = useState(1)


    const onChangeMenu = value => {
        setMenu(value)
    }

    return (
        <div>
            <Header />
            <Segmented
                block
                value={menu} onChange={onChangeMenu}
                options={apiMenu} style={{ fontSize: '1.875rem' }}
            />
            <div className=" bg-stone-200 rounded-md pb-8 pt-2">
                <Container>
                    <Row>
                        {
                            apiTest.map(item => (
                                <Col lg={3} md={4} sm={6} xs={12} key={item.title} className="pt-6">
                                    <CardItem
                                        id={item.id}
                                        src={item.img}
                                        title={item.title}
                                        details={item.details}
                                        price={item.price}
                                        stock={item.stock}
                                    />
                                </Col>
                            ))
                        }
                    </Row>

                </Container>
            </div>
        </div>

    )
}

export default Home
