# -*- coding: utf-8 -*-
# https://www.youtube.com/watch?v=0Oef3MHYEC0
# Problemet handlar om att med hjälp av två kärl, 5 och 3 liter mäta upp t ex 4 liter
# Det ska också generaliseras till godtyckliga hinkstorlekar
# Starta med att fylla det första kärlet.

class Water():

    def __init__(self, a, b):
        self.a = a
        self.b = b

    def next_dir(self, x, y, d):
        return 0

    def next_pos(self, x, y, d):
        return (0, 0)

    def solve(self, target):
        return []

    def find_best(self, target):
        return []

    def explain(lst):
        return []

water = Water(5,3)
assert water.a == 5
assert water.b == 3

assert water.next_dir(5, 0, 1) == 0
assert water.next_dir(0, 2, 0) == 1
assert water.next_dir(2, 3, 0) == 2

assert water.next_pos(5, 0, 0) == (2, 3)
assert water.next_pos(0, 2, 1) == (5, 2)
assert water.next_pos(2, 3, 2) == (2, 0)

assert water.explain([[5, 0, 0]]) == ['a to b']
assert water.explain([[0, 0, 1]]) == ['fill a']
assert water.explain([[2, 3, 2]]) == ['clear b']

water35 = Water(3,5)
water53 = Water(5,3)
assert water35.solve(1) == [[0, 0, 1], [3, 0, 0], [0, 3, 1], [3, 3, 0], [1, 5, 2]]
assert water53.solve(1) == [[0, 0, 1], [5, 0, 0], [2, 3, 2], [2, 0, 0], [0, 2, 1], [5, 2, 0], [4, 3, 2], [4, 0, 0], [1, 3, 2]]

assert water35.solve(6) == [[0, 0, 1], [3, 0, 0], [0, 3, 1]]
assert water53.solve(6) == [[0, 0, 1], [5, 0, 0], [2, 3, 2], [2, 0, 0], [0, 2, 1], [5, 2, 0], [4, 3, 2], [4, 0, 0], [1, 3, 2], [1, 0, 0], [0, 1, 1]]
assert Water.explain(water53.solve(6)) == ['fill a', 'a to b', 'clear b', 'a to b', 'fill a', 'a to b', 'clear b', 'a to b', 'clear b', 'a to b', 'fill a']

water711 = Water(7,11)
water117 = Water(11,7)
assert water711.solve(14) == [[0, 0, 1], [7, 0, 0], [0, 7, 1]]
assert len(water117.solve(14)) == 31

assert water53.find_best(1) == [[0, 0, 1], [3, 0, 0], [0, 3, 1], [3, 3, 0], [1, 5, 2]]
assert water117.find_best(14) == [[0, 0, 1], [7, 0, 0], [0, 7, 1]]