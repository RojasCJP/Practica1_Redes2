### R HUB
```
enable
conf t

int gig 0/2
ip address 1.1.1.1 255.255.255.252
no shutdown
exit
int gig 0/1
ip address 2.2.2.1 255.255.255.252
no shutdown
exit
int gig 0/0
ip address 3.3.3.1 255.255.255.252
no shutdown
exit
```

### R IZQ
```
int gig 0/1
ip address 3.3.3.2 255.255.255.252
no shutdown
exit
int gig 0/0
ip address 192.168.22.1 255.255.255.224
no shutdown
exit
```

### R ARRIBA
```
int gig 0/0
ip address 1.1.1.2 255.255.255.252
no shutdown
exit
int gig 0/1
ip address 192.168.22.65 255.255.255.224
no shutdown
exit
```

### R DERECHO
```
int gig 0/0
ip address 2.2.2.2 255.255.255.252
no shutdown
exit
int gig 0/1
ip address 192.168.22.33 255.255.255.224
no shutdown
exit
```
# ROUTEO

# HUB
```
router ospf 100
network 1.1.1.0 0.0.0.3 area 0
exit

router ospf 200
network 2.2.2.0 0.0.0.3 area 0
exit

router rip
version 2
no auto-summary
network 3.3.3.0
exit

router rip
redistribute ospf 100 metric 15
redistribute ospf 200 metric 15
exit

router ospf 100
redistribute rip subnets
exit

router ospf 200
redistribute rip subnets
exit
```
# ARRIBA
```
router ospf 100
network 1.1.1.0 0.0.0.3 area 0
network 192.168.22.65 0.0.0.31 area 0
exit
```
# DERECHA
```
router ospf 200
network 2.2.2.0 0.0.0.3 area 0
network 192.168.22.33 0.0.0.31 area 0
exit
```
# IZQUIERDO
```
router rip
version 2
no auto-summary
network 3.3.3.0
network 192.168.22.1
end
```