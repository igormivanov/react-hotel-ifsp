import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {register} from 'swiper/element/bundle';
import videoNatal from '../../../../assets/videos/natal.mp4';
import videoCasal from '../../../../assets/videos/casal.mp4';
register();

import { ButtonsGroup, LinkButton, LoveButton, LoveDescription, NatalButton, NatalDescription, SlidersContainer, SpaContainer, SpaDescription} from "./styles"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom';

export function Sliders(){

  const data = [
    {id: '1', tag: 'spa'},
    {id: '2', tag: 'natal'},
    {id: '3', tag: 'amor'},
  ]

  return (
    <SlidersContainer>
      <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation={true}
          spaceBetween={50}
          loop
          effect={'fade'}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {item.tag === 'spa' ? (
                  <SpaContainer>
                    <img src="https://static.wixstatic.com/media/758a8f_a590b164602f43dbad48267ddc49f3dd~mv2.jpg/v1/fill/w_1696,h_650,al_c,q_90,enc_auto/758a8f_a590b164602f43dbad48267ddc49f3dd~mv2.jpg" alt="" />
                    <SpaDescription >
                      <h1>HOTEL IFSP</h1>
                      <p>com terapias para você relaxar.</p>
                      <p>Venha ter um tempo de bem estar e relaxamento com terapias, serviços e gastronomia especialmente preparadas para você.</p>
                      <ButtonsGroup>
                        <Link to="/">
                          <LinkButton>Conhecer Mais</LinkButton>
                        </Link>
                        <Link to="/">
                          <LinkButton>Reservar Agora</LinkButton>
                        </Link>
                      </ButtonsGroup>
                    </SpaDescription>
                  </SpaContainer> 
                  ) : item.tag === 'natal' ? (
                    <div>
                      <video src={videoNatal} autoPlay loop muted controls={false}/>
                      <NatalDescription>
                        <h1>Natal em Salto</h1>
                        <p>Vivemos um tempo mágico.</p>
                        <p>Todo o hotel e a cidade respiram o fascínio do natal e te convidamos para viver essa experiência!</p>
                        <Link to="/">
                            <NatalButton>Reservar agora</NatalButton>
                        </Link>
                      </NatalDescription>
                    </div>

                  ) : item.tag === 'amor' ? (
                    <div>
                      <video src={videoCasal} autoPlay loop style={{ filter: "brightness(80%)" }} muted controls={false}/>
                      <LoveDescription>
                        <h1>Nada melhor que poder desfrutar de bons momentos com quem você ama!</h1>
                        <p>Te esperamos no WhatsApp para conversar e oferecer as melhores dicas, períodos e tarifas para sua viagem.</p>
                        <p>Aguardamos vocês!</p>
                        <ButtonsGroup>
                          <Link to="/">
                            <LoveButton>Conhecer Mais</LoveButton>
                          </Link>
                          <Link to="/">
                            <LoveButton>Reservar Agora</LoveButton>
                          </Link>
                        </ButtonsGroup>
                      </LoveDescription>
                    </div>
                  ) : ''
                }   
              </SwiperSlide>
            )
          })}
        </Swiper>
    </SlidersContainer>
  )
}