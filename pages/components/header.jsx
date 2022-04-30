import React from 'react'
import { } from 'antd'
import { Row, Col, Container } from 'reactstrap'
import { LeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'


const Header = ({ backDisible }) => {

    const router = useRouter()

    const actionLink = () => {
        router.push({
            pathname: '/home',
        })
    }

    return (
        <div className="bg-white h-14 p-1 shadow-md">
            {
                backDisible ?
                    <div className="text-3xl"><LeftOutlined onClick={() => actionLink()} /> </div>
                    :
                    <div className="text-3xl text-center">Simple Vending Machine </div>
            }
        </div >
    )
}

export default Header
