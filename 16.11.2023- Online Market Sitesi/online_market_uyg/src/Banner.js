
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

const Headline = ({ products }) => {

    return (
        <Container>
            <Container className='text-center' fluid>
                <h1 className="display-3">Türkiyenin En Güvenilir Online Marketi</h1>
                <p className="lead">En popüler ve öne çıkan ürünleri keşfedin!</p>
            </Container>
            <Row>
                <Col className='big'>
                    <Card inverse>
                        <CardImg
                            alt="Card image cap"
                            src="/images/product2.jpg"

                            style={{
                                height: 542
                            }}
                            width="100%"
                        />
                        <CardImgOverlay>
                            <CardTitle style={{ color: "black" }} tag="h5">
                                Doğal Meyve Suyu
                            </CardTitle>
                            <CardText>
                                <small className="text-muted">
                                    Doğal meyvelerin tazeliğinde, katkı maddesi içermeyen sağlıklı bir içecek.
                                </small>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col>
                    <Row>
                        <Col className='1'>
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src="/images/product14.jpg"
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle style={{ color: "black" }} tag="h5">
                                        Hindi Kuşbaşı
                                    </CardTitle>
                                    <CardText>
                                        <small className="text-muted">
                                            Düşük yağ içeriğiyle sağlıklı hindi kuşbaşı.
                                        </small>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col className='2'>
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src="/images/product26.jpg"
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle style={{ color: "black" }} tag="h5">
                                    Granola Bar
                                    </CardTitle>
                                    <CardText>
                                        <small className="text-muted">
                                        Sağlıklı ve enerji dolu granola bar.
                                        </small>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='3'>
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src="/images/product3.jpg"
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle style={{ color: "black" }} tag="h5">
                                    Belçika Çikolatalı Kurabiye
                                    </CardTitle>
                                    <CardText>
                                        <small className="text-muted">
                                        Belçika çikolatasının zengin aromasını ve çıtır çıtır kurabiyelerin tadını çıkarın.
                                        </small>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col className='4'>
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src="/images/product18.jpg"
                                    style={{
                                        height: 270
                                    }}
                                    width="100%"
                                />
                                <CardImgOverlay>
                                    <CardTitle style={{ color: "black" }} tag="h5">
                                    Temizlik Bezi
                                    </CardTitle>
                                    <CardText>
                                        <small className="text-muted">
                                        Ev temizliği için etkili temizlik bezi.
                                        </small>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Headline;