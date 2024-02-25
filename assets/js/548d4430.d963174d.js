"use strict";(self.webpackChunkcloud=self.webpackChunkcloud||[]).push([[5389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="podman",l={unversionedId:"podman",id:"podman",title:"podman",description:"My personal podman notes.",source:"@site/docs/podman.md",sourceDirName:".",slug:"/podman",permalink:"/cloud/docs/podman",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/podman.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"oc output",permalink:"/cloud/docs/openshift/oc_output"},next:{title:"podman",permalink:"/cloud/docs/podman_"}},p={},s=[{value:"Contents",id:"contents",level:2},{value:"Linux kernel namespace",id:"linux-kernel-namespace",level:2},{value:"Process isolation",id:"process-isolation",level:3},{value:"Network",id:"network",level:3},{value:"IPC",id:"ipc",level:3},{value:"UTS",id:"uts",level:3},{value:"user id",id:"user-id",level:3},{value:"CG (control groups)",id:"cg-control-groups",level:2},{value:"Memory",id:"memory",level:3},{value:"Union filesystem",id:"union-filesystem",level:2},{value:"container",id:"container-1",level:2},{value:"Image",id:"image",level:2},{value:"Registry",id:"registry",level:2},{value:"docker images pull error",id:"docker-images-pull-error",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podman"},"podman"),(0,r.kt)("p",null,"My personal ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," notes.   "),(0,r.kt)("p",null,"I referred examples and contents from a Udemy course ",(0,r.kt)("inlineCode",{parentName:"p"},"A deep dive into containers using Podman")," by Swapnil Jain.",(0,r.kt)("br",{parentName:"p"}),"\n","This page is for my hands-on practice.   "),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#podman"},"podman"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contents"},"Contents")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cheat-sheet"},"Cheat-sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#virtualization-vs-containerization"},"Virtualization vs. containerization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#container"},"Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-vs-podman"},"Docker vs. podman")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#the-underlying-technologies"},"The underlying technologies"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#linux-kernel-namespace"},"Linux kernel namespace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#process-isolation"},"Process isolation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#network"},"Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ipc"},"IPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#uts"},"UTS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#user-id"},"user id")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cg-control-groups"},"CG (control groups)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#memory"},"Memory")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#union-filesystem"},"Union filesystem")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#container-ecosystem"},"Container ecosystem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#container-1"},"container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#image"},"Image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#registry"},"Registry")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-container"},"create a container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#misc"},"MISC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-images-pull-error"},"docker images pull error"))))),(0,r.kt)("h1",{id:"cheat-sheet"},"Cheat-sheet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman ps     # running container list \npodman ps -a  # all container including stopped and active   \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman stop <container name>    # send SIGTERM signal. It taking time, it will run podman kill    \npodman start <container name>  \n\npodman rm <container name>  \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman search ubuntu --limit 3  # search \npodman pull <image name> \npodman images  # image list \npodman rmi <image id>   # delete a downloaded image   \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman top <container name>  # display processes within a container  \npodman stats <container name>  # memory usages etc.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman run -d -it --name test-con1 docker.io/ubuntu bash   ## run  \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"-d : detach, background mode",(0,r.kt)("br",{parentName:"p"}),"\n","-i, --interactive : Keep STDIN\n-t, --tty  : allocate a pseudo-TTY\n--name : assing a name   ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Contents")),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"podman")," is installed in Redhat 8.X ( CentOS 8.X, Fedora 34 ) by default.",(0,r.kt)("br",{parentName:"li"}),"So no need to install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"),"    ")),(0,r.kt)("p",null,"If not installed, "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum -y install podman\n")),(0,r.kt)("h1",{id:"virtualization-vs-containerization"},"Virtualization vs. containerization"),(0,r.kt)("p",null,"Virtualization  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtual HW by hypervisor (VIOS, VMware etc ) "),(0,r.kt)("li",{parentName:"ul"},"install OS : each VM has fulll copy of OS.   ")),(0,r.kt)("p",null,"Containerization  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtual OS on same HW sharing OS kernel by container runtime"),(0,r.kt)("li",{parentName:"ul"},"Since 1982, Solaris zones(2004), AIX WPAR(2007), Docker(2013), OCI(2015)"),(0,r.kt)("li",{parentName:"ul"},"portable "),(0,r.kt)("li",{parentName:"ul"},"app (code package,dependencies)"),(0,r.kt)("li",{parentName:"ul"},"less resouces")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Contents")),(0,r.kt)("h1",{id:"container"},"Container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lightweight OS virtualization"),(0,r.kt)("li",{parentName:"ul"},"A process running in an isoloated env. created by Linux kernel namespace.  "),(0,r.kt)("li",{parentName:"ul"},"Isolation for what ?\nPID, mount, network, IPC, hostname, user, cgroup ...    ")),(0,r.kt)("h1",{id:"docker-vs-podman"},"Docker vs. podman"),(0,r.kt)("p",null,"Both are container runtime.  "),(0,r.kt)("p",null,"Docker   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"interface to Linux namespace"),(0,r.kt)("li",{parentName:"ul"},"Open sourced\nStandard container format( docker image)",(0,r.kt)("br",{parentName:"li"}),"Tools for build ( Dockerfile / docker build)",(0,r.kt)("br",{parentName:"li"}),"Tools for run  ( docker CLI/API)   ")),(0,r.kt)("p",null,"OCI (Open Container Initiative)   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker donated its runtime etc.  "),(0,r.kt)("li",{parentName:"ul"},"Docker's original image format has become standard.   ")),(0,r.kt)("p",null,"podman"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alternative docker command line tool.   "),(0,r.kt)("li",{parentName:"ul"},"daemonless  "),(0,r.kt)("li",{parentName:"ul"},"Linux native    ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Contents")),(0,r.kt)("h1",{id:"the-underlying-technologies"},"The underlying technologies"),(0,r.kt)("h2",{id:"linux-kernel-namespace"},"Linux kernel namespace"),(0,r.kt)("p",null,"mount/PID/network/ipc/user id/UTS(Unix time-sharing)    "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alpine linux : 5 MB size linux distribution. Much more complete than Busybox.   ")),(0,r.kt)("h3",{id:"process-isolation"},"Process isolation"),(0,r.kt)("p",null,"Terminal 1 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman run -it --name=test1 docker.io/alpine sh\n..\n/ # ps -ef\nPID   USER     TIME  COMMAND\n    1 root      0:00 sh\n    7 root      0:00 ps -ef\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," creates new container and run commands.   ")),(0,r.kt)("p",null,"Terminal 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman run -it --name=test2 docker.io/alpine sh\n/ # ps -ef\nPID   USER     TIME  COMMAND\n    1 root      0:00 sh\n    7 root      0:00 ps -ef\n/ # sleep 12345\n")),(0,r.kt)("p",null,"Primary process of each container has PID 1, which is mapped to a real process ID.  "),(0,r.kt)("p",null,"Terminal 3   "),(0,r.kt)("p",null,"Dispay processes in each container.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman top test1\nUSER        PID         PPID        %CPU        ELAPSED          TTY         TIME        COMMAND\nroot        1           0           0.000       6m48.425775585s  pts/0       0s          sh \n[root@jsredhat81 ~]# podman top test2\nUSER        PID         PPID        %CPU        ELAPSED          TTY         TIME        COMMAND\nroot        1           0           0.000       4m38.032068883s  pts/0       0s          sh \nroot        8           1           0.000       55.032197196s    pts/0       0s          sleep 12345 \n")),(0,r.kt)("p",null,"PID 8 of test2 conatiner is PID 113948 on the system.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# ps -ef |grep 12345 |grep -v grep\nroot      113947  113888  0 Feb03 pts/0    00:00:00 sleep 12345\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content"),"  "),(0,r.kt)("h3",{id:"network"},"Network"),(0,r.kt)("p",null,"Each container has a virtual IP.",(0,r.kt)("br",{parentName:"p"}),"\n","test1 conatiner  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/ # ifconfig eth0\neth0      Link encap:Ethernet  HWaddr 6A:86:1D:1F:8C:9A  \n          inet addr:10.88.0.3  Bcast:10.88.255.255  Mask:255.255.0.0\n...\n")),(0,r.kt)("p",null,"test2 container   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/ # ifconfig eth0\neth0      Link encap:Ethernet  HWaddr 8E:4A:94:50:F0:41  \n          inet addr:10.88.0.4  Bcast:10.88.255.255  Mask:255.255.0.0\n...\n")),(0,r.kt)("h3",{id:"ipc"},"IPC"),(0,r.kt)("p",null,"IPC should not happen between different containers.    "),(0,r.kt)("h3",{id:"uts"},"UTS"),(0,r.kt)("p",null,"hostname   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# uname -a\nLinux jsredhat81.fyre.ibm.com 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 x86_64 x86_64 GNU/Linux\n[root@jsredhat81 ~]# podman exec -it test1 sh \n/ # hostname\n86e805e924de\n/ # exit\n[root@jsredhat81 ~]# podman run -it --name=test3 --hostname=test3.example.com docker.io/alpine sh \n/ # uname -a\nLinux test3.example.com 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 Linux\n/ # \n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h3",{id:"user-id"},"user id"),(0,r.kt)("p",null,"Running a conatiner by an user creation in the container.   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman run -it --name=test4 --hostname=test4.example.com --user 12345 docker.io/alpine sh \n~ $ ps -ef\nPID   USER     TIME  COMMAND\n    1 12345     0:00 sh\n    7 12345     0:00 ps -ef\n~ $ grep 12345 /etc/passwd\n12345:*:12345:0:container user:/:/bin/sh\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ps")," shows the process running by ",(0,r.kt)("inlineCode",{parentName:"p"},"12345")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# ps -ef |grep 12345\n12345     155035  155023  0 18:22 pts/0    00:00:00 sh\n12345     155071  155061  0 18:22 pts/1    00:00:00 sh\nroot      155111  155081  0 18:24 pts/4    00:00:00 grep --color=auto 12345\n")),(0,r.kt)("p",null,"From host OS, the user ",(0,r.kt)("inlineCode",{parentName:"p"},"12345")," does not exist.   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# grep 12345 /etc/passwd\n[root@jsredhat81 ~]#\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h2",{id:"cg-control-groups"},"CG (control groups)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limits an application to a specific set of resources.   "),(0,r.kt)("li",{parentName:"ul"},"allow to share available HW resources to containers and optionally enforce limits and constrains.    ")),(0,r.kt)("h3",{id:"memory"},"Memory"),(0,r.kt)("p",null,"Memory in the conatiner    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman exec -it test1 sh \n/ # free -h\n              total        used        free      shared  buff/cache   available\nMem:          15.4G      486.5M       13.8G       34.7M        1.1G       14.6G\nSwap:         16.0G           0       16.0G\n")),(0,r.kt)("p",null,"Memory in the host 15 GB.",(0,r.kt)("br",{parentName:"p"}),"\n","Therefore test1 conatiner is set to use all host memory.   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/ # exit\n[root@jsredhat81 ~]# free -h\n              total        used        free      shared  buff/cache   available\nMem:           15Gi       464Mi        13Gi        34Mi       1.1Gi        14Gi\nSwap:          15Gi          0B        15Gi\n")),(0,r.kt)("p",null,"test1 conatiner is set to use all host memory 16 GB.    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman stats test1 \nID            NAME        CPU %       MEM USAGE / LIMIT  MEM %       NET IO            BLOCK IO    PIDS        CPU TIME      AVG CPU %\n86e805e924de  test1       0.00%       749.6kB / 16.53GB  0.00%       7.19kB / 2.362kB  0B / 0B     2           146.048245ms  0.00%\n")),(0,r.kt)("p",null,"Run a container with memory limitation   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman run -it --name=test6 --memory=50M  -d docker.io/alpine sh\n4a6efb5f69d366fd60ebc8de5c1e1174ff754c5ba52c387fec2bc5f0ea49e934\n\n[root@jsredhat81 ~]# podman stats test6 \nID            NAME        CPU %       MEM USAGE / LIMIT  MEM %       NET IO       BLOCK IO    PIDS        CPU TIME     AVG CPU %\n4a6efb5f69d3  test6       0.04%       438.3kB / 52.43MB  0.84%       710B / 752B  0B / 0B     1           46.312391ms  0.04%\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"-d : background ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h2",{id:"union-filesystem"},"Union filesystem"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h1",{id:"container-ecosystem"},"Container ecosystem"),(0,r.kt)("h2",{id:"container-1"},"container"),(0,r.kt)("p",null,"Runnable instance of an image  "),(0,r.kt)("h2",{id:"image"},"Image"),(0,r.kt)("p",null,"Read-only template with instructions for creating an OCI container.",(0,r.kt)("br",{parentName:"p"}),"\n","Each instrunction in a Dockerfile creates a layer in the image.",(0,r.kt)("br",{parentName:"p"}),"\n","Create your own images or use from registry   "),(0,r.kt)("h2",{id:"registry"},"Registry"),(0,r.kt)("p",null,"Easy to share.   "),(0,r.kt)("p",null,"By default, podman is configured to look for images on   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"registry.access.redhat.com    : public"),(0,r.kt)("li",{parentName:"ul"},"registry.redhat.io            : private. only subscribers "),(0,r.kt)("li",{parentName:"ul"},"docker.io   ")),(0,r.kt)("p",null,"/etc/containers/registries.conf    "),(0,r.kt)("p",null,"Fedora "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'unqualified-search-registries = ["registry.fedoraproject.org", "registry.access.redhat.com", "docker.io", "quay.io"]\n')),(0,r.kt)("p",null,"Redhat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'unqualified-search-registries = ["registry.access.redhat.com", "registry.redhat.io", "docker.io"]\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h1",{id:"create-a-container"},"create a container."),(0,r.kt)("p",null,"Ubuntu example.    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[root@jsredhat81 ~]# podman run -it --name test-con1 docker.io/ubuntu bash\nroot@4a13213eddab:/# cat /etc/lsb-release\nDISTRIB_ID=Ubuntu\nDISTRIB_RELEASE=22.04\nDISTRIB_CODENAME=jammy\nDISTRIB_DESCRIPTION="Ubuntu 22.04.3 LTS"\n')),(0,r.kt)("p",null,"Kernel is shared from the host. In this case Redhat 8.     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root@4a13213eddab:/# uname -a\nLinux 4a13213eddab 4.18.0-477.27.1.el8_8.x86_64 #1 SMP Thu Aug 31 10:29:22 EDT 2023 x86_64 x86_64 x86_64 GNU/Linux\n")),(0,r.kt)("p",null,"If exiting the ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),", the container shutdown as it started with ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),".     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root@4a13213eddab:/# exit\nexit\n[root@jsredhat81 ~]# podman ps -a\nCONTAINER ID  IMAGE                            COMMAND     CREATED         STATUS                     PORTS       NAMES\n4a13213eddab  docker.io/library/ubuntu:latest  bash        4 minutes ago   Exited (0) 11 seconds ago              test-con1\n[root@jsredhat81 ~]# podman ps\nCONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES\n")),(0,r.kt)("p",null,"start the container again.\nNow used ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," option. Previously ",(0,r.kt)("inlineCode",{parentName:"p"},"run ..... bash"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMAND")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),".      "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman start test-con1\ntest-con1\n[root@jsredhat81 ~]# podman ps\nCONTAINER ID  IMAGE                            COMMAND     CREATED        STATUS        PORTS       NAMES\n4a13213eddab  docker.io/library/ubuntu:latest  bash        6 minutes ago  Up 3 seconds              test-con1\n")),(0,r.kt)("p",null,"Run bash for the container.",(0,r.kt)("br",{parentName:"p"}),"\n","New PID 21 bash is generated for new connected session.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@jsredhat81 ~]# podman exec -it test-con1 bash\nroot@4a13213eddab:/# ps -ef\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 08:50 pts/0    00:00:00 bash\nroot          21       0  0 08:52 pts/1    00:00:00 bash    <===\nroot          29      21  0 08:52 pts/1    00:00:00 ps -ef\n\nroot@4a13213eddab:/# exit\nexit\n[root@jsredhat81 ~]# podman exec test-con1 ps -ef\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 08:50 pts/0    00:00:00 bash\nroot          30       0  0 08:54 ?        00:00:00 ps -ef\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")),(0,r.kt)("h1",{id:"misc"},"MISC"),(0,r.kt)("h2",{id:"docker-images-pull-error"},"docker images pull error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[root@jsredhat81 ~]# podman run docker.io/alpine echo "Hello World"\nTrying to pull docker.io/library/alpine:latest...\nWARN[0034] Failed, retrying in 1s ... (1/3). Error: copying system image from manifest list: determining manifest MIME type for docker://alpine:latest: reading manifest sha256:6457d53fb065d6f250e1504b9bc42d5b6c65941d57532c072d929dd0628977d0 in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit \nWARN[0066] Failed, retrying in 1s ... (2/3). Error: initializing source docker://alpine:latest: reading manifest latest in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit \nWARN[0099] Failed, retrying in 1s ... (3/3). Error: copying system image from manifest list: determining manifest MIME type for docker://alpine:latest: reading manifest sha256:6457d53fb065d6f250e1504b9bc42d5b6c65941d57532c072d929dd0628977d0 in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit \nError: initializing source docker://alpine:latest: reading manifest latest in docker.io/library/alpine: toomanyrequests: You have reached your pull rate limit. You may increase the limit by authenticating and upgrading: https://www.docker.com/increase-rate-limit\n')),(0,r.kt)("p",null,"Error is same even after docker login.",(0,r.kt)("br",{parentName:"p"}),"\n","Better not to delete images.    "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#contents"},"Go to content")))}c.isMDXComponent=!0}}]);