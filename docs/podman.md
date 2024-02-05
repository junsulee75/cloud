# podman

My personal `podman` notes.   

I referred examples and contents from a Udemy course `A deep dive into containers using Podman` by Swapnil Jain.    
This page is for my hands-on practice.   

## Contents
- [podman](#podman)
  - [Contents](#contents)
- [Cheat-sheet](#cheat-sheet)
- [Installation](#installation)
- [Virtualization vs. containerization](#virtualization-vs-containerization)
- [Container](#container)
- [Docker vs. podman](#docker-vs-podman)
- [The underlying technologies](#the-underlying-technologies)
  - [Linux kernel namespace](#linux-kernel-namespace)
    - [Process isolation](#process-isolation)
    - [Network](#network)
    - [IPC](#ipc)
    - [UTS](#uts)
    - [user id](#user-id)
  - [CG (control groups)](#cg-control-groups)
    - [Memory](#memory)
  - [Union filesystem](#union-filesystem)
- [Container ecosystem](#container-ecosystem)
  - [container](#container-1)
  - [Image](#image)
  - [Registry](#registry)
- [create a container.](#create-a-container)
- [MISC](#misc)
  - [docker images pull error](#docker-images-pull-error)

# Cheat-sheet   

```
podman ps     # running container list 
podman ps -a  # all container including stopped and active   
```

```
podman stop <container name>    # send SIGTERM signal. It taking time, it will run podman kill    
podman start <container name>  

podman rm <container name>  
```

```
podman search ubuntu --limit 3  # search 
podman pull <image name> 
podman images  # image list 
podman rmi <image id>   # delete a downloaded image   
```
```
podman top <container name>  # display processes within a container  
podman stats <container name>  # memory usages etc.
```

```
podman run -d -it --name test-con1 docker.io/ubuntu bash   ## run  
```  
> -d : detach, background mode   
> -i, --interactive : Keep STDIN
> -t, --tty  : allocate a pseudo-TTY 
> --name : assing a name   

[Contents](#contents)

# Installation  

- `podman` is installed in Redhat 8.X ( CentOS 8.X, Fedora 34 ) by default.    
  So no need to install `docker`    

If not installed, 
```
yum -y install podman
```   

# Virtualization vs. containerization   

Virtualization  
- Virtual HW by hypervisor (VIOS, VMware etc ) 
- install OS : each VM has fulll copy of OS.   

Containerization  
- Virtual OS on same HW sharing OS kernel by container runtime
- Since 1982, Solaris zones(2004), AIX WPAR(2007), Docker(2013), OCI(2015)
- portable 
- app (code package,dependencies)
- less resouces

[Contents](#contents)

# Container
- lightweight OS virtualization
- A process running in an isoloated env. created by Linux kernel namespace.  
- Isolation for what ? 
  PID, mount, network, IPC, hostname, user, cgroup ...    

# Docker vs. podman  
Both are container runtime.  

Docker   
- interface to Linux namespace
- Open sourced 
  Standard container format( docker image)   
  Tools for build ( Dockerfile / docker build)   
  Tools for run  ( docker CLI/API)   

OCI (Open Container Initiative)   
- Docker donated its runtime etc.  
- Docker's original image format has become standard.   

podman
- alternative docker command line tool.   
- daemonless  
- Linux native    
 
[Contents](#contents)


# The underlying technologies   
## Linux kernel namespace   
mount/PID/network/ipc/user id/UTS(Unix time-sharing)    

> Alpine linux : 5 MB size linux distribution. Much more complete than Busybox.   

### Process isolation   
Terminal 1 
```
[root@jsredhat81 ~]# podman run -it --name=test1 docker.io/alpine sh
..
/ # ps -ef
PID   USER     TIME  COMMAND
    1 root      0:00 sh
    7 root      0:00 ps -ef
```
> `docker run` creates new container and run commands.   

Terminal 2
```
[root@jsredhat81 ~]# podman run -it --name=test2 docker.io/alpine sh
/ # ps -ef
PID   USER     TIME  COMMAND
    1 root      0:00 sh
    7 root      0:00 ps -ef
/ # sleep 12345
```

Primary process of each container has PID 1, which is mapped to a real process ID.  

Terminal 3   

Dispay processes in each container.  

```
[root@jsredhat81 ~]# podman top test1
USER        PID         PPID        %CPU        ELAPSED          TTY         TIME        COMMAND
root        1           0           0.000       6m48.425775585s  pts/0       0s          sh 
[root@jsredhat81 ~]# podman top test2
USER        PID         PPID        %CPU        ELAPSED          TTY         TIME        COMMAND
root        1           0           0.000       4m38.032068883s  pts/0       0s          sh 
root        8           1           0.000       55.032197196s    pts/0       0s          sleep 12345 
```

PID 8 of test2 conatiner is PID 113948 on the system.  
```
[root@jsredhat81 ~]# ps -ef |grep 12345 |grep -v grep
root      113947  113888  0 Feb03 pts/0    00:00:00 sleep 12345
```
     
[Go to content](#contents)  

### Network

Each container has a virtual IP.    
test1 conatiner  
```
/ # ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 6A:86:1D:1F:8C:9A  
          inet addr:10.88.0.3  Bcast:10.88.255.255  Mask:255.255.0.0
...
```
test2 container   
```
/ # ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 8E:4A:94:50:F0:41  
          inet addr:10.88.0.4  Bcast:10.88.255.255  Mask:255.255.0.0
...
```

### IPC

IPC should not happen between different containers.    

### UTS

hostname   
```
[root@jsredhat81 ~]# uname -a
Linux jsredhat81.fyre.ibm.com 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 x86_64 x86_64 GNU/Linux
[root@jsredhat81 ~]# podman exec -it test1 sh 
/ # hostname
86e805e924de
/ # exit
[root@jsredhat81 ~]# podman run -it --name=test3 --hostname=test3.example.com docker.io/alpine sh 
/ # uname -a
Linux test3.example.com 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 Linux
/ # 
```


[Go to content](#contents)

### user id   

Running a conatiner by an user creation in the container.   

```
[root@jsredhat81 ~]# podman run -it --name=test4 --hostname=test4.example.com --user 12345 docker.io/alpine sh 
~ $ ps -ef
PID   USER     TIME  COMMAND
    1 12345     0:00 sh
    7 12345     0:00 ps -ef
~ $ grep 12345 /etc/passwd
12345:*:12345:0:container user:/:/bin/sh
```

`ps` shows the process running by `12345` 
```
[root@jsredhat81 ~]# ps -ef |grep 12345
12345     155035  155023  0 18:22 pts/0    00:00:00 sh
12345     155071  155061  0 18:22 pts/1    00:00:00 sh
root      155111  155081  0 18:24 pts/4    00:00:00 grep --color=auto 12345
```
From host OS, the user `12345` does not exist.   

```
[root@jsredhat81 ~]# grep 12345 /etc/passwd
[root@jsredhat81 ~]#
```

[Go to content](#contents)

## CG (control groups)

- Limits an application to a specific set of resources.   
- allow to share available HW resources to containers and optionally enforce limits and constrains.    

### Memory  

Memory in the conatiner    
```
[root@jsredhat81 ~]# podman exec -it test1 sh 
/ # free -h
              total        used        free      shared  buff/cache   available
Mem:          15.4G      486.5M       13.8G       34.7M        1.1G       14.6G
Swap:         16.0G           0       16.0G
```
Memory in the host 15 GB.  
Therefore test1 conatiner is set to use all host memory.   

```
/ # exit
[root@jsredhat81 ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:           15Gi       464Mi        13Gi        34Mi       1.1Gi        14Gi
Swap:          15Gi          0B        15Gi
```

test1 conatiner is set to use all host memory 16 GB.    
```
[root@jsredhat81 ~]# podman stats test1 
ID            NAME        CPU %       MEM USAGE / LIMIT  MEM %       NET IO            BLOCK IO    PIDS        CPU TIME      AVG CPU %
86e805e924de  test1       0.00%       749.6kB / 16.53GB  0.00%       7.19kB / 2.362kB  0B / 0B     2           146.048245ms  0.00%
```

Run a container with memory limitation   
```
[root@jsredhat81 ~]# podman run -it --name=test6 --memory=50M  -d docker.io/alpine sh
4a6efb5f69d366fd60ebc8de5c1e1174ff754c5ba52c387fec2bc5f0ea49e934

[root@jsredhat81 ~]# podman stats test6 
ID            NAME        CPU %       MEM USAGE / LIMIT  MEM %       NET IO       BLOCK IO    PIDS        CPU TIME     AVG CPU %
4a6efb5f69d3  test6       0.04%       438.3kB / 52.43MB  0.84%       710B / 752B  0B / 0B     1           46.312391ms  0.04%
```

> -d : background 


[Go to content](#contents)

## Union filesystem

[Go to content](#contents)


# Container ecosystem   

## container 
Runnable instance of an image  

## Image

Read-only template with instructions for creating an OCI container.  
Each instrunction in a Dockerfile creates a layer in the image.   
Create your own images or use from registry   

## Registry   

Easy to share.   

By default, podman is configured to look for images on   
- registry.access.redhat.com    : public
- registry.redhat.io            : private. only subscribers 
- docker.io   

/etc/containers/registries.conf    

Fedora 
```
unqualified-search-registries = ["registry.fedoraproject.org", "registry.access.redhat.com", "docker.io", "quay.io"]
```

Redhat
```
unqualified-search-registries = ["registry.access.redhat.com", "registry.redhat.io", "docker.io"]
```

[Go to content](#contents)

# create a container.   

Ubuntu example.    
```
[root@jsredhat81 ~]# podman run -it --name test-con1 docker.io/ubuntu bash
root@4a13213eddab:/# cat /etc/lsb-release
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=22.04
DISTRIB_CODENAME=jammy
DISTRIB_DESCRIPTION="Ubuntu 22.04.3 LTS"
```

Kernel is shared from the host. In this case Redhat 8.     
```
root@4a13213eddab:/# uname -a
Linux 4a13213eddab 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 x86_64 x86_64 GNU/Linux
```

If exiting the `bash`, the container shutdown as it started with `bash`.     

```
root@4a13213eddab:/# exit
exit
[root@jsredhat81 ~]# podman ps -a
CONTAINER ID  IMAGE                            COMMAND     CREATED         STATUS                     PORTS       NAMES
4a13213eddab  docker.io/library/ubuntu:latest  bash        4 minutes ago   Exited (0) 11 seconds ago              test-con1
[root@jsredhat81 ~]# podman ps
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
```

start the container again. 
Now used `start` option. Previously `run ..... bash`.     
Here, `COMMAND` is `bash`.      
```
[root@jsredhat81 ~]# podman start test-con1
test-con1
[root@jsredhat81 ~]# podman ps
CONTAINER ID  IMAGE                            COMMAND     CREATED        STATUS        PORTS       NAMES
4a13213eddab  docker.io/library/ubuntu:latest  bash        6 minutes ago  Up 3 seconds              test-con1
```

Run bash for the container.  
New PID 21 bash is generated for new connected session.  
```
[root@jsredhat81 ~]# podman exec -it test-con1 bash
root@4a13213eddab:/# ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 08:50 pts/0    00:00:00 bash
root          21       0  0 08:52 pts/1    00:00:00 bash    <===
root          29      21  0 08:52 pts/1    00:00:00 ps -ef

root@4a13213eddab:/# exit
exit
[root@jsredhat81 ~]# podman exec test-con1 ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 08:50 pts/0    00:00:00 bash
root          30       0  0 08:54 ?        00:00:00 ps -ef
```

[Go to content](#contents)

# MISC

## docker images pull error   

```
[root@jsredhat81 ~]# podman run docker.io/alpine echo "Hello World"
Trying to pull docker.io/library/alpine:latest...
WARN[0034] Failed, retrying in 1s ... (1/3). Error: copying system image from manifest list: determining manifest MIME type for docker://alpine:latest: reading manifest sha256:6457d53fb065d6f250e1504b9bc42d5b6c65941d57532c072d929dd0628977d0 in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit 
WARN[0066] Failed, retrying in 1s ... (2/3). Error: initializing source docker://alpine:latest: reading manifest latest in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit 
WARN[0099] Failed, retrying in 1s ... (3/3). Error: copying system image from manifest list: determining manifest MIME type for docker://alpine:latest: reading manifest sha256:6457d53fb065d6f250e1504b9bc42d5b6c65941d57532c072d929dd0628977d0 in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit 
Error: initializing source docker://alpine:latest: reading manifest latest in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit
```

Error is same even after docker login.   
Better not to delete images.    


[Go to content](#contents)
