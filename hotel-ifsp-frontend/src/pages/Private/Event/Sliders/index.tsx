import { Swiper, SwiperSlide } from "swiper/react"
import { CardContainer, EventSlidersContainer } from "./styles"
// import { SpaContainer, SpaDescription, ButtonsGroup, SpaLink, NatalDescription, NatalLink, LoveDescription, LoveLink } from "../../../Home/components/Sliders/styles"

export function EventSliders(){

  const data = [
    {id: '1', tag: 'spa'},
    {id: '2', tag: 'natal'},
    {id: '3', tag: 'amor'},
  ]

  return (
    <EventSlidersContainer>
      <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation={true}
          spaceBetween={50}
          loop
          effect={'fade'}
          // autoplay={{
          //   delay: 9000,
          //   disableOnInteraction: false,
          // }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {item.tag === 'spa' ? (
                  <CardContainer>
                    {/* <SpaDescription >
                      <h1>HOTEL IFSP</h1>
                      <p>com terapias para você relaxar.</p>
                      <p>Venha ter um tempo de bem estar e relaxamento com terapias, serviços e gastronomia especialmente preparadas para você.</p>
                      <ButtonsGroup>
                        <SpaLink to="/">Conhecer Mais</SpaLink>
                        <SpaLink to="/booking">Reservar Agora</SpaLink>
                      </ButtonsGroup>
                    </SpaDescription> */}
                  </CardContainer> 
                  ) : item.tag === 'natal' ? (
                    <div>
                      {/* <NatalDescription>
                        <h1>Natal em Salto</h1>
                        <p>Vivemos um tempo mágico.</p>
                        <p>Todo o hotel e a cidade respiram o fascínio do natal e te convidamos para viver essa experiência!</p>
                        <NatalLink to="/booking">Reservar Agora</NatalLink>
                      </NatalDescription> */}
                    </div>

                  ) : item.tag === 'amor' ? (
                    <div>
                      {/* <LoveDescription>
                        <h1>Nada melhor que poder desfrutar de bons momentos com quem você ama!</h1>
                        <p>Te esperamos no WhatsApp para conversar e oferecer as melhores dicas, períodos e tarifas para sua viagem.</p>
                        <p>Aguardamos vocês!</p>
                        <ButtonsGroup>
                          <LoveLink to="/">Conhecer mais</LoveLink>
                          <LoveLink to="/booking">Reservar Agora</LoveLink>
                        </ButtonsGroup>
                      </LoveDescription> */}
                    </div>
                  ) : ''
                }   
              </SwiperSlide>
            )
          })}
        </Swiper>
    </EventSlidersContainer>
  )
}