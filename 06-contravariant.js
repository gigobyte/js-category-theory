//=============================================//
//                    Intro                    //
//=============================================//
//     Basically flipped composition operator  //
//                                             //
//  class Contravariant f where                //
//      contramap  :: (b -> a) -> f a -> f b   //
//=============================================//
//                Implementation:              //
//=============================================//
const contramap = f => g => x => f(g(x))
