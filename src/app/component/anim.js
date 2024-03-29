const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
 initial: {
    opacity: 0
 },
 open: {
    opacity: 1,
    transition: {duration:0.35}
 },
 close: {
    opacity: 0,
    transition: {duration:0.35}
 }
}

export const height = {
 initial: {
    height: 0
   
 },
 enter: {
    height: '100vh',
    transition
 },
 exit: {
    height: 0,
    transition 
 }
}