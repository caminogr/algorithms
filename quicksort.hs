--- without pivoting, not in-place
qsort :: (Ord a) => [a] -> [a]  
qsort []     = []  
qsort (x:xs) = (qsort left) ++ [x] ++ (qsort right)  
               where left  = filter (<x)  xs  
                     right = filter (>=x) xs  
array = [4,21,5,12,6,2, 5];
main = print $ qsort array
