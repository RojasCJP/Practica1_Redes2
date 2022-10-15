
# IZQ
```
int gigabitEthernet 0/0
no shutdown
ip address 192.168.52.1 255.255.255.224
exit

int gigabitEthernet 0/1
no shutdown
ip address 1.1.1.1 255.255.255.252
exit

router eigrp 100
no auto-summary
network 1.1.1.0 0.0.0.3
network 192.168.52.1 0.0.0.31
exit
```
# CENTRAL
```
int gigabitEthernet 0/0
no shutdown
ip address 1.1.1.2 255.255.255.252
exit

int gigabitEthernet 0/1
no shutdown
ip address 2.2.2.1 255.255.255.252
exit

router eigrp 100
no auto-summary
network 1.1.1.0 0.0.0.3
exit
router ospf 200
network 2.2.2.2 0.0.0.3 area 0
exit
router eigrp 100
redistribute ospf 200 metric 1 1 1 1 1
exit
router ospf 200
redistribute eigrp 100 subnets 
exit
```
# DERECHO
```
int gigabitEthernet 0/1
no shutdown
ip address 192.168.52.33 255.255.255.224
exit

int gigabitEthernet 0/0
no shutdown
ip address 2.2.2.2 255.255.255.252
exit

router ospf 200
network 2.2.2.0 0.0.0.3 area 0
network 192.168.52.33 0.0.0.31 area 0
exit
```
