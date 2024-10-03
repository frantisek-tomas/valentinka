import math

def solve(a, b, c):

    d = b ** 2 - 4 * a * c
    
    if d < 0:
        return None
    
    x1 = ( -b + math.sqrt(d) ) / ( 2 * a )
    x2 = ( -b - math.sqrt(d) ) / ( 2 * a )
    
    return max( x1, x2 )
