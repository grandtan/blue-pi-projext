import React, { memo } from 'react'
import { Card, Image } from 'antd'
import { useRouter } from 'next/router'

const CardItem = ({ src, price, title, details, alt, id, stock }) => {
    const router = useRouter()

    const actionLink = () => {
        router.push({
            pathname: '/product',
            query: { id }
        })
    }

    return (
        <Card
            onClick={() => stock !== 0 && actionLink()}
            hoverable={stock !== 0}
            style={{
                boxShadow: "rgb(208 216 243 / 60%) 0px 1px 3px 1px;",
            }}
        >
            <div className="text-3xl font-semibold text-right">{`฿ ${price}`}</div>
            <Image
                src={src}
                width={"100%"}
                height={"100%"}
                preview={false}
                alt={alt || ""}
                className=""
            />
            <div className="text-3xl font-semibold">{stock === 0 ? `${title} (สินค้าหมด)` : title}</div>
            <div className="text-xl">{details}</div>
        </Card>
    )
}

export default memo(CardItem)
