1    addi x1, x0, 0
2    addi x2, x0, 5
3    addi x3, x0, 0
4    lui x3, 0x10000
5    addi x4, x0, 0
6
7 merkelapp:
8    lw x7, 0(x3)
9    add x4, x4, x7
10   addi x3, x3, 4
11   addi x1, x1, 1
12   ble x1, x2, merkelapp


1   addi x1, x0, 10
2   addi x2, x0, 11
3   addi x3, x0, 12
4   add  x3, x1, x1
5   add  x5, x2, x3