# Docker notes

## Installation 

### Fedora 34

```
[junsulee@fedora kube]$ sudo su -
[sudo] password for junsulee: 

[root@fedora yum.repos.d]# sudo dnf -y install dnf-plugins-core
Last metadata expiration check: 0:20:13 ago on Sun 03 Oct 2021 01:55:35 PM AEDT.
Package dnf-plugins-core-4.0.21-1.fc34.noarch is already installed.
Dependencies resolved.
Nothing to do.
Complete!

[root@fedora yum.repos.d]# sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo

[root@fedora yum.repos.d]# ls -tlr
...
-rw-r--r--. 1 root root 1919 Oct  3 14:16 docker-ce.repo   <=====

[root@fedora yum.repos.d]# sudo dnf install docker-ce docker-ce-cli containerd.io


[root@fedora yum.repos.d]# sudo systemctl start docker

[root@fedora yum.repos.d]# docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: wnstn75
Password: 
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded

[root@fedora yum.repos.d]# systemctl enable --now docker
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /usr/lib/systemd/system/docker.service.

[junsulee@fedora kube]$ sudo systemctl start docker  

[root@fedora yum.repos.d]# systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
     Active: active (running) since Sun 2021-10-03 14:30:22 AEDT; 36min ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 48683 (dockerd)
      Tasks: 10
     Memory: 110.9M
        CPU: 7.342s
     CGroup: /system.slice/docker.service
             └─48683 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

Oct 03 14:30:20 fedora dockerd[48683]: time="2021-10-03T14:30:20.895441399+11:00" level=info msg="Firewalld: interface docker0 already part of docker zone, returning"
Oct 03 14:30:21 fedora dockerd[48683]: time="2021-10-03T14:30:21.432514438+11:00" level=info msg="Default bridge (docker0) is assigned with an IP address 172.17.0.0/16. Daemon op>
Oct 03 14:30:21 fedora dockerd[48683]: time="2021-10-03T14:30:21.646078722+11:00" level=info msg="Firewalld: interface docker0 already part of docker zone, returning"
Oct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.010146452+11:00" level=info msg="Loading containers: done."
Oct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.029505869+11:00" level=info msg="Docker daemon" commit=75249d8 graphdriver(s)=btrfs version=20.10.8
Oct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.029607429+11:00" level=info msg="Daemon has completed initialization"
Oct 03 14:30:22 fedora systemd[1]: Started Docker Application Container Engine.
Oct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.127444762+11:00" level=info msg="API listen on /run/docker.sock"
Oct 03 14:31:03 fedora dockerd[48683]: time="2021-10-03T14:31:03.121903401+11:00" level=info msg="ignoring event" container=185e43aa0bcac85f8e01e293eb8b4c7c40753daa2c5b3945d9b133>
Oct 03 14:32:10 fedora dockerd[48683]: time="2021-10-03T14:32:10.815124927+11:00" level=info msg="ignoring event" container=b2d3463833502515da9035c92aaae6c8ec5d123adab6d9e7838c64


[junsulee@fedora kube]$ sudo docker run hello-world

```

#### Enable docker to users   

Make other users be able to run docker commands 
```
[root@fedora yum.repos.d]# grep docker /etc/group
docker:x:974:

[root@fedora yum.repos.d]# usermod -aG docker student
[root@fedora yum.repos.d]# usermod -aG docker junsulee

[junsulee@fedora kube]$ id
uid=1000(junsulee) gid=1000(junsulee) groups=1000(junsulee),10(wheel),983(libvirt) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
[junsulee@fedora kube]$ newgrp docker
[junsulee@fedora kube]$ id
uid=1000(junsulee) gid=974(docker) groups=974(docker),10(wheel),983(libvirt),1000(junsulee) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
```

## Commands reference

### Containers

#### Containers list
```
[junsulee@fedora dockerfile]$ docker ps -a
CONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS                         PORTS     NAMES
0e25a9aed431   nginx         "/docker-entrypoint.…"   32 minutes ago      Exited (0) 30 minutes ago                lucid_wiles
b706e36accb1   hello-world   "/hello"                 45 minutes ago      Exited (0) 45 minutes ago                xenodochial_grothendieck
b2d346383350   ubuntu        "bash"                   About an hour ago   Exited (0) About an hour ago             thirsty_chandrasekhar
185e43aa0bca   hello-world   "/hello"                 About an hour ago   Exited (0) About an hour ago             distracted_nobel
9e710e2f8a6b   hello-world   "/hello"                 2 hours ago         Exited (0) 2 hours ago                   gracious_williamson
```

#### Remove a container
```
[junsulee@fedora dockerfile]$ docker rm 9e710e2f8a6b
9e710e2f8a6b
```
### Image
Remove images

```
[junsulee@fedora dockerfile]$ docker images
REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
nmap          latest    c6ae1cc59ecd   23 minutes ago   381MB
ubuntu        latest    597ce1600cf4   2 days ago       72.8MB
nginx         latest    f8f4ffc8092c   4 days ago       133MB
hello-world   latest    feb5d9fea6a5   9 days ago       13.3kB
centos        latest    5d0da3dc9764   2 weeks ago      231MB
[junsulee@fedora dockerfile]$ docker rmi hello-world:latest
Error response from daemon: conflict: unable to remove repository reference "hello-world:latest" (must force) - container b706e36accb1 is using its referenced image feb5d9fea6a5
[junsulee@fedora dockerfile]$ docker rmi hello-world:latest --force
Untagged: hello-world:latest
Untagged: hello-world@sha256:9ade9cc2e26189a19c2e8854b9c8f1e14829b51c55a630ee675a5a9540ef6ccf
Deleted: sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412
[junsulee@fedora dockerfile]$ 
[junsulee@fedora dockerfile]$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
nmap         latest    c6ae1cc59ecd   24 minutes ago   381MB
ubuntu       latest    597ce1600cf4   2 days ago       72.8MB
nginx        latest    f8f4ffc8092c   4 days ago       133MB
centos       latest    5d0da3dc9764   2 weeks ago      231MB
```

#### Interactive terminal

```
[junsulee@fedora dockerfile]$ docker run -it ubuntu /bin/bash
root@057b82d3723e:/# 
root@057b82d3723e:/# 
root@057b82d3723e:/# ps
    PID TTY          TIME CMD
      1 pts/0    00:00:00 bash
     10 pts/0    00:00:00 ps
```

## docker build    

### Simple example

#### Prepare `Dockerfile`
```
[junsulee@fedora dockerfile]$ cat Dockerfile
FROM centos
MAINTAINER Sander <mail@sandervanvugt.nl>

# Add repo file
ADD ./sander.repo /etc/yum.repos.d/

# Install cool software
RUN yum --assumeyes update && \
yum --assumeyes install bash nmap iproute && \
yum clean all

ENTRYPOINT ["/usr/bin/nmap"]
CMD ["-sn", "172.17.0.0/24"]   
```

#### Build

```
[junsulee@fedora dockerfile]$ docker build -t nmap .
Sending build context to Docker daemon  3.072kB
Step 1/6 : FROM centos
latest: Pulling from library/cento
..
Step 5/6 : ENTRYPOINT ["/usr/bin/nmap"]
 ---> Running in f4cd0017a3ad
Removing intermediate container f4cd0017a3ad
 ---> 90e5abc9073d
Step 6/6 : CMD ["-sn", "172.17.0.0/24"]
 ---> Running in f1a664916088
Removing intermediate container f1a664916088
 ---> c6ae1cc59ecd
Successfully built c6ae1cc59ecd
Successfully tagged nmap:latest
...

```

## Network - docker0

Start containers
```
[junsulee@fedora dockerfile]$ docker run -d nginx
17956e11b52a22d608b6d17c56f13cdc3e72bb9771766c2556f2a7ee1f79ca2d
[junsulee@fedora dockerfile]$ docker run -d nginx
35187d3f227aff6b64be33ac0c49ebe359345f600160c747516cefa48d1877af

[junsulee@fedora dockerfile]$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
35187d3f227a   nginx     "/docker-entrypoint.…"   22 seconds ago   Up 18 seconds   80/tcp    hungry_shannon
17956e11b52a   nginx     "/docker-entrypoint.…"   36 seconds ago   Up 32 seconds   80/tcp    elated_proskuriakova

[junsulee@fedora dockerfile]$ docker run nmap
Starting Nmap 7.70 ( https://nmap.org ) at 2021-10-03 06:58 UTC
Nmap scan report for 172.17.0.1
Host is up (-0.20s latency).
MAC Address: 02:42:99:65:8B:1C (Unknown)
Nmap scan report for 172.17.0.2
Host is up (-0.20s latency).
MAC Address: 02:42:AC:11:00:02 (Unknown)
Nmap scan report for 172.17.0.3
Host is up (-0.12s latency).
MAC Address: 02:42:AC:11:00:03 (Unknown)
Nmap scan report for 67fd5af243a1 (172.17.0.4)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 5.73 seconds

```

veth~~  virtual interfaces for two containers.       

```
[junsulee@fedora dockerfile]$ ip a
...
7: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
..
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
..
23: veth46d4d3a@if22: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default 
...
25: veth319fdf2@if24: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default 
...
```

Check IP address of a docker container     

```
[junsulee@fedora dockerfile]$ docker exec -it hungry_shannon /bin/bash
root@35187d3f227a:/# ip a
bash: ip: command not found
root@35187d3f227a:/# ifconfig -a
bash: ifconfig: command not found
root@35187d3f227a:/# cd /proc/net
root@35187d3f227a:/proc/net# ls
anycast6   fib_trie	 igmp		ip6_tables_matches  ip_tables_matches  mcfilter6     nf_conntrack_expect  raw	     rt_acct   sockstat6     udp       wireless
arp	   fib_triestat  igmp6		ip6_tables_names    ip_tables_names    netfilter     packet		  raw6	     rt_cache  softnet_stat  udp6      xfrm_stat
dev	   icmp		 ip6_flowlabel	ip6_tables_targets  ip_tables_targets  netlink	     protocols		  route      snmp      stat	     udplite
dev_mcast  icmp6	 ip6_mr_cache	ip_mr_cache	    ipv6_route	       netstat	     psched		  rpc	     snmp6     tcp	     udplite6
dev_snmp6  if_inet6	 ip6_mr_vif	ip_mr_vif	    mcfilter	       nf_conntrack  ptype		  rt6_stats  sockstat  tcp6	     unix
root@35187d3f227a:/proc/net# cat fib_trie
...
Local:
...
     +-- 172.17.0.0/16 2 0 2
        +-- 172.17.0.0/30 2 0 2
           |-- 172.17.0.0
              /32 link BROADCAST
              /16 link UNICAST
           |-- 172.17.0.3
              /32 host LOCAL
        |-- 172.17.255.255
           /32 link BROADCAST
```

Or by `inspect` option 
```
[junsulee@fedora dockerfile]$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
35187d3f227a   nginx     "/docker-entrypoint.…"   13 minutes ago   Up 13 minutes   80/tcp    hungry_shannon
17956e11b52a   nginx     "/docker-entrypoint.…"   13 minutes ago   Up 13 minutes   80/tcp    elated_proskuriakova
[junsulee@fedora dockerfile]$ 
[junsulee@fedora dockerfile]$ docker inspect 35187d3f227a
..
        "NetworkSettings": {
            "Bridge": "",
...
            "Ports": {
                "80/tcp": null
            },
...
            "Gateway": "172.17.0.1",
...
            "IPAddress": "172.17.0.3",
...
```

## Docker storage   

## Process

```

$ ps -fax
...
  48209 ?        Ssl    0:04 /usr/bin/containerd
  48683 ?        Ssl    0:42 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
  49800 ?        Ss     0:00 gpg-agent --homedir /var/cache/PackageKit/34/metadata/docker-ce-stable-34-x86_64.tmp/gpgdir --use-standard-socket --daemon
  51069 ?        Sl     0:00 /usr/bin/containerd-shim-runc-v2 -namespace moby -id 17956e11b52a22d608b6d17c56f13cdc3e72bb9771766c2556f2a7ee1f79ca2d -address /run/containerd/contain
  51090 ?        Ss     0:00  \_ nginx: master process nginx -g daemon off;
  51146 ?        S      0:00      \_ nginx: worker process
  51147 ?        S      0:00      \_ nginx: worker process
  51182 ?        Sl     0:00 /usr/bin/containerd-shim-runc-v2 -namespace moby -id 35187d3f227aff6b64be33ac0c49ebe359345f600160c747516cefa48d1877af -address /run/containerd/contain
  51201 ?        Ss     0:00  \_ nginx: master process nginx -g daemon off;
  51254 ?        S      0:00      \_ nginx: worker process
  51255 ?        S      0:00      \_ nginx: worker process
```
