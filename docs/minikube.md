# minikube

## My minikube environment
On an old Windows thinkpad laptop with 24 GB memory, `Fedora` VMware VM.     
Starting `minikube` by `KVM` on the Fedora VM.     


## Operations
### Connect to minikube VM host

```
ssh junsulee@fedora # login to fedora VM
sudo su -  # for operations needing root permission
```
### start minikube

- Give KVM authority to users. give `libvirt` group to users.   
Necessary to start `minikube` 
```
[root@fedora kubernetes]# usermod -aG libvirt junsulee
[root@fedora kubernetes]# usermod -aG libvirt student
[root@fedora ~]# grep vmx /proc/cpuinfo    ## should have `vmx` 
```

- Start by a non root user      
```
minikube start --memory 4096 --vm-driver=kvm2
```

example :  
```
[junsulee@fedora ~]$ minikube start --memory 4096 --vm-driver=kvm2
* minikube v1.20.0 on Fedora 34
* Using the kvm2 driver based on user configuration
* Starting control plane node minikube in cluster minikube
* Creating kvm2 VM (CPUs=2, Memory=4096MB, Disk=20000MB) ...
* Preparing Kubernetes v1.20.2 on Docker 20.10.6 ...
  - Generating certificates and keys ...
  - Booting up control plane ...
  - Configuring RBAC rules ...
* Verifying Kubernetes components...
  - Using image gcr.io/k8s-minikube/storage-provisioner:v5
* Enabled addons: default-storageclass, storage-provisioner
* Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

When starting after system halt    
```
[junsulee@fedora ~]$ minikube start --memory 4096 --vm-driver=kvm2
* minikube v1.20.0 on Fedora 34
* minikube 1.22.0 is available! Download it: https://github.com/kubernetes/minikube/releases/tag/v1.22.0
* To disable this notice, run: 'minikube config set WantUpdateNotification false'

* Using the kvm2 driver based on existing profile
* Starting control plane node minikube in cluster minikube
* Restarting existing kvm2 VM for "minikube" ...
* Preparing Kubernetes v1.20.2 on Docker 20.10.6 ...
X Problems detected in kubelet:
  Aug 29 23:38:41 minikube kubelet[2691]: E0829 23:38:41.239851    2691 pod_workers.go:191] Error syncing pod b320587ee357c92247809ba00ce3080a ("kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"), skipping: failed to "StartContainer" for "kube-apiserver" with CrashLoopBackOff: "back-off 20s restarting failed container=kube-apiserver pod=kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"
X Problems detected in kubelet:
  Aug 29 23:38:41 minikube kubelet[2691]: E0829 23:38:41.239851    2691 pod_workers.go:191] Error syncing pod b320587ee357c92247809ba00ce3080a ("kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"), skipping: failed to "StartContainer" for "kube-apiserver" with CrashLoopBackOff: "back-off 20s restarting failed container=kube-apiserver pod=kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"
  Aug 29 23:38:50 minikube kubelet[2691]: E0829 23:38:50.122463    2691 pod_workers.go:191] Error syncing pod b320587ee357c92247809ba00ce3080a ("kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"), skipping: failed to "StartContainer" for "kube-apiserver" with CrashLoopBackOff: "back-off 20s restarting failed container=kube-apiserver pod=kube-apiserver-minikube_kube-system(b320587ee357c92247809ba00ce3080a)"
  Aug 29 23:38:51 minikube kubelet[2691]: E0829 23:38:51.165528    2691 pod_workers.go:191] Error syncing pod 474c55dfb64741cc485e46b6bb9f2dc0 ("kube-controller-manager-minikube_kube-system(474c55dfb64741cc485e46b6bb9f2dc0)"), skipping: failed to "StartContainer" for "kube-controller-manager" with CrashLoopBackOff: "back-off 20s restarting failed container=kube-controller-manager pod=kube-controller-manager-minikube_kube-system(474c55dfb64741cc485e46b6bb9f2dc0)"
  Aug 29 23:38:54 minikube kubelet[2691]: E0829 23:38:54.439750    2691 pod_workers.go:191] Error syncing pod 474c55dfb64741cc485e46b6bb9f2dc0 ("kube-controller-manager-minikube_kube-system(474c55dfb64741cc485e46b6bb9f2dc0)"), skipping: failed to "StartContainer" for "kube-controller-manager" with CrashLoopBackOff: "back-off 20s restarting failed container=kube-controller-manager pod=kube-controller-manager-minikube_kube-system(474c55dfb64741cc485e46b6bb9f2dc0)"
! Unable to restart cluster, will reset it: apiserver health: apiserver healthz never reported healthy: cluster wait timed out during healthz check
  - Generating certificates and keys ...
  - Booting up control plane ...
  - Configuring RBAC rules ...
* Verifying Kubernetes components...
  - Using image gcr.io/k8s-minikube/storage-provisioner:v5
* Enabled addons: default-storageclass, storage-provisioner
* Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

## Troubleshooting 
### Creating VM error 
#### Error
```
! StartHost failed, but will try again: creating host: create: Error creating machine: Error in driver during machine creation: error creating VM: virError(Code=1, Domain=10, Message='internal error: process exited while connecting to monitor: 2021-05-17T07:32:21.253962Z qemu-system-x86_64: error: failed to set MSR 0x48f to 0x7fffff00036dfb
qemu-system-x86_64: ../target/i386/kvm.c:2701: kvm_buf_set_msrs: Assertion `ret == cpu->kvm_msr_buf->nmsrs' failed.')
* Creating kvm2 VM (CPUs=2, Memory=4096MB, Disk=20000MB) ...
```

#### Resolution
https://github.com/kubernetes/minikube/issues/2968
https://github.com/kubernetes/minikube/issues/2412

On vmware configuration, turn on 'Virtualize CPU performance counters'.     


### [bad certificate](https://stackoverflow.com/questions/71542604/minikube-remote-error-tls-bad-certificate)

#### Error
```
[junsulee@fedora ~]$ minikube_start
😄  minikube v1.20.0 on Fedora 34
✨  Using the kvm2 driver based on existing profile
👍  Starting control plane node minikube in cluster minikube
🔄  Restarting existing kvm2 VM for "minikube" ...
🐳  Preparing Kubernetes v1.20.2 on Docker 20.10.6 ...
❌  Problems detected in etcd [4e630926db47]:
    2022-05-21 04:49:16.015098 I | embed: rejected connection from "127.0.0.1:53760" (error "remote error: tls: bad certificate", ServerName "")
    2022-05-21 04:49:19.119305 I | embed: rejected connection from "127.0.0.1:53766" (error "remote error: tls: bad certificate", ServerName "")
    2022-05-21 04:49:20.231942 I | embed: rejected connection from "127.0.0.1:53774" (error "remote error: tls: bad certificate", ServerName "")
```
#### Resolution 
```
kubectl conf view
kubectl config delete-cluster minikube
minikube delete
minikube_start
```

## Commands reference  

```
minikube dashboard   ## works in fedora GUI. Opening web browser
```

## System Outlook 

```
[junsulee@fedora kube]$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   17

$ kubectl get nodes
NAME       STATUS   ROLES                  AGE   VERSION
minikube   Ready    control-plane,master   6d    v1.20.2

$ kubectl cluster-info
Kubernetes control plane is running at https://192.168.39.235:8443
KubeDNS is running at https://192.168.39.235:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

[junsulee@fedora ~]$ kubectl config view
apiVersion: v1
clusters:
- cluster:
    certificate-authority: /home/junsulee/.minikube/ca.crt
    extensions:
    - extension:
        last-update: Sat, 14 May 2022 13:01:44 AEST
        provider: minikube.sigs.k8s.io
        version: v1.20.0
      name: cluster_info
    server: https://192.168.39.235:8443
  name: minikube
contexts:
- context:
    cluster: minikube
    extensions:
    - extension:
        last-update: Sat, 14 May 2022 13:01:44 AEST
        provider: minikube.sigs.k8s.io
        version: v1.20.0
      name: context_info
    namespace: default
    user: minikube
  name: minikube
current-context: minikube
kind: Config
preferences: {}
users:
- name: minikube
  user:
    client-certificate: /home/junsulee/.minikube/profiles/minikube/client.crt
    client-key: /home/junsulee/.minikube/profiles/minikube/client.key
```

# Reference

[Oreilly kubernetes education github repository](https://github.com/sandervanvugt/kubernetes)

[KVM Virtualization on VMware 12](
https://borysneselovskyi.wordpress.com/2018/02/19/kvm-virtualization-on-top-of-the-vmware-workstation-12-guest-vms/)



# Lab
## Lab 02 Operating containers    

```
[junsulee@fedora kube]$ docker run --rm -v /dev/log:/dev/log fedora:latest logger "Message from the container" 
Unable to find image 'fedora:latest' locally
latest: Pulling from library/fedora
70fb9965a23f: Pull complete 
Digest: sha256:0c18a515203b836ea840f7033a11d6833f9468fda6a99f5a29695cfbaf43f24a
Status: Downloaded newer image for fedora:latest

[junsulee@fedora kube]$ journalctl |grep container
...
Oct 03 20:40:39 fedora root[52426]: Message from the container
```

