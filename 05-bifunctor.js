//========================================================//
//                          Intro                         //
//========================================================//
//  class Bifunctor f where                               //
//      bimap :: (a -> c) -> (b -> d) -> f a b -> f c d   //
//      bimap g h = first g . second h                    //
//      first :: (a -> c) -> f a b -> f c b               //
//      first g = bimap g id                              //
//      second :: (b -> d) -> f a b -> f a d              //
//      second = bimap id                                 //
//========================================================//
//                     Implementation:                    //
//========================================================//
// compose :: (a -> b) -> (b -> c) -> (a -> c)
const compose = f => g => x => g(f(x))
// id :: a -> a
const id = x => x

const bimap = g => h => compose(first(g))(second(h))
const first = g => bimap(g)(id)
const second = bimap(id)
