const assert = require('assert')

//========================================//
//                 Intro                  //
//========================================//
//       Arrow = Morphism = Function      //
//              f :: A -> B               //
//              g :: B - C                //
//              g ◦ f = g(f())            //
//========================================//
//             Implementation:            //
//========================================//
// f :: (a -> b)
const f = x => x+1
// g :: (b - c)
const g = x => x.toString()
// h :: (c -> d)
const h = x => x + "!"
// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = f => g => x => g(f(x))
//========================================//
//                 Proof:                 //
//========================================//
const c = compose(g)(f)
assert(c(3) === '31') // -> passes


//========================================//
//        Property: Associativity         //
//========================================//
// h ◦ (g ◦ f) = (h ◦ g) ◦ f = h ◦ g ◦ f  //
//========================================//
//                 Proof:                 //
//========================================//
const c1 = compose(h)(compose(g)(f))
const c2 = compose(compose(h)(g))(f)
const c3 = compose(compose(h)(g))(f)
assert(c1(1) === c2(1) && c2(1) === c3(1) && c1(1) === c3(1)) // -> passes


//========================================//
//           Property: Identity           //
//========================================//
//              f ◦ idA = f               //
//              idB ◦ f = f               //
//========================================//
//                 Proof:                 //
//========================================//
// id :: a -> a
const id = x => x
assert(compose(f)(id)(3) === f(3)) // -> passes
assert(compose(id)(f)(3) === f(3)) // -> passes