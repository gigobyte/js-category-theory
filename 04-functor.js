const assert = require('assert')

//========================================//
//                 Intro                  //
//========================================//
//  class Functor f where                 //
//      fmap  :: (a -> b) -> f a -> f b   //
//========================================//
//             Implementation:            //
//========================================//
// data Maybe a = Nothing | Just a 
const Nothing = () => ({isNothing: true})
const Just = x => ({value: x, isJust: true})

// fmap :: (a -> b) -> Maybe a -> Maybe b
fmap = f => x => x.isJust
    ? Just(f(x.value))
    : Nothing()

//========================================//
//                 Proof:                 //
//========================================//
assert.deepEqual(
    fmap(x => x+1)(Just(5)),
    Just(6)
)

assert.deepEqual(
    fmap(x => x+1)(Nothing()),
    Nothing()
)

//========================================//
//              Law: Identity             //
//========================================//
//              fmap id = id              //
//========================================//
//                 Proof:                 //
//========================================//
// id :: a -> a
const id = x => x
assert.deepEqual(
    fmap(id)(Just(5)),
    id(Just(5))
)

//========================================//
//       Law: Preserves composition       //
//========================================//
//      fmap (g ◦ f) = fmap g ◦ fmap f    //
//========================================//
//                 Proof:                 //
//========================================//
// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = f => g => x => g(f(x))
const f = x => x + 1
const g = x => x + '1'

const map1 = fmap(compose(g)(f))
const map2 = compose(fmap(g))(fmap(f))

assert.deepEqual(
    map1(Just(1)),
    map2(Just(1))
)