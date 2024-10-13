// import React, { useLayoutEffect ,useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ReactLenis, useLenis } from 'lenis/react'
// import SplitType from "split-type";

// import './ScrollTrigger.css';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// function Scroll () {
//   const main = useRef();

//   useGSAP(() => {
//     const splitTypes = document.querySelectorAll('.title, .gap, .scroll-edit')
//     splitTypes.forEach((char, i) => {
//       const text = new SplitType(char, { types: 'chars' })
//       gsap.from(text.chars, {
//         scrollTrigger: {
//           trigger: char,
//           start: 'top 80%',
//           end: 'top 100%',
//           scrub: 1,
//           markers: false
//         },
//         scaleY: 0,
//         x: -10,
//         y: -20,
//         transformOrigin: 'left',
//         stagger: 0.01
//       })
//     })
//   })

//   // const lenisRef = useRef()

//   // useEffect(() => {
//   //   function update(time) {
//   //     lenisRef.current?.lenis?.raf(time * 1000)
//   //   }

//   //   gsap.ticker.add(update)

//   //   return() => {
//   //     gsap.ticker.remove(update)
//   //   }
//   // })

//   // return(
//   //   <ReactLenis ref={lenisRef} autoRaf={false}>
//   //     {/*content*/}
//   //   </ReactLenis>
//   // )


//   // useEffect(() => {
//   //       gsap.registerPlugin(ScrollTrigger)
    
//   //       const splitTypes = document.querySelectorAll('.title, .gap, .scroll-edit')
    
//   //       splitTypes.forEach((char, i) => {
//   //         const bg = char.dataset.bgColor
//   //         const fg = char.dataset.fgColor
    
//   //         // const text = new SplitType(char, { types: 'chars' })
//   //         const text = new SplitType(char, { types: 'chars' })
    
//           // gsap.from(char, {
//           //   scrollTrigger: char, // start the animation when ".box" enters the viewport (once)
//           //   x: -500
//           // });
    
//           // gsap.fromTo(text.chars,
//           //   {
//           //   color: bg
//           //   },
//           //   {
//           //     color: fg,
//           //     duration: 0.2,
//           //     stagger: 0.2,
//           //     scrollTrigger: {
//           //       trigger: char,
//           //       start: 'top 25%',
//           //       end: 'top 20%',
//           //       scrub: 2,
//           //       markers: false,
//           //     },
//           // })
    
//           // gsap.from(text.chars, {
//           //   scrollTrigger: {
//           //     trigger: char,
//           //     start: 'top 25%',
//           //     end: 'top 18%',
//           //     scrub: 4,
//           //     markers: false
//           //   },
//           //   opacity: 0.2,
//           //   stagger: 0.01
//           // })
    
//           // gsap.from(text.chars, {
//           //   scrollTrigger: {
//           //     trigger: char,
//           //     start: 'top 80%',
//           //     end: 'top 100%',
//           //     scrub: 1,
//           //     markers: false
//           //   },
//           //   scaleY: 0,
//           //   x: -10,
//           //   y: -20,
//           //   transformOrigin: 'left',
//           //   stagger: 0.01
//           // })
    
//           // gsap.from(text.lines, {
//           //   scrollTrigger: {
//           //     trigger: char,
//           //     toggleActions: 'restart none restart none',
//           //   },
//           //   x: -100,
//           //   transformOrigin: 'left',
//           //   stagger: 0.01
//           // })
//       //   })
//       // })
    


//     return (
//         <>
//         <div className="sobre sobre-start">
//           <div className="teste">
//             <h1 className="title" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Um pouco sobre o site</h1>
//             <hr />
//           </div>
//           <div className="sobre-buble testando-1">
//             <section className='oi'>
//               <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Porque Owlpost?</h5>
//               <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">O nome é formado por duas palavras, "Owl" (Coruja) o animal que representa a sabedoria e a inteligência e "Post" de postar,
//                 e a plataforma segue essa ideia de entregar e compartilhar conhecimentos. A pronuncia também lembra a palavra outpost (posto avançado),
//                 seria o seu ponto de referência enquanto você está explorando novos conhecimentos.
//                 E por ultimo, pra quem gosta, é uma referência ao sistema de correios de corujas usado em Harry Potter.</p>
//             </section>
//           </div>
//         </div>

//         <div className="sobre" >
//             <div className="sobre-buble">
//                 <section>
//                     <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Como surgiu a ideia da gamificação?</h5>
//                     <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">No início, não tínhamos uma ideia clara do que criar. No entanto, surgiu a oportunidade de desenvolver algo
//                     que pudesse ajudar a turma de enfermagem. Com isso em mente, decidimos criar um jogo. Usando a ideia da
//                     gamificação, estamos empenhados em desenvolver um jogo que torne o aprendizado de conteúdos complexos mais fácil e divertido.</p>
//                 </section>
//             </div>
//         </div>

//         <div className="sobre" >
//           <div className="sobre-buble">
//             <section>
//               <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Como surgiu a ideia da plataforma?</h5>
//               <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">Como não seria possível criar um jogo que cobriria a quantidade de conteúdo da turma de enfermagem, começamos a pensar
//                 em outras maneiras de fazer isso. Foi assim que surgiu a ideia trazer todo esse conteúdo para um único lugar. Professores
//                 e alunos compartilham conteúdos que eles conheçam e que estariam espalhados em livros, ou sites e outros alunos poderam
//                 acessar esse conteúdo.</p>
//             </section>
//           </div>
//         </div>
//         </>
//     )
// }

// export default Scroll;