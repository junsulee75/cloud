# minikube

## My minikube environment
On an old Windows thinkpad laptop with 24 GB memory, `Fedora` VMware VM.     
Starting `minikube` by `KVM` on the Fedora VM.     


## Operations
### Connect to a host having minikube VM

```
ssh junsulee@fedora # login to fedora VM
sudo su -  # for operations needing root permission
```
### start minikube

- Give KVM authority to users. give `libvirt` group to users.   
Necessary to start `minikube` 
```
# usermod -aG libvirt junsulee
# usermod -aG libvirt student
# grep vmx /proc/cpuinfo    ## should have `vmx` 
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
$ minikube start --memory 4096 --vm-driver=kvm2
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
$ minikube_start
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
$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   17

$ kubectl get nodes
NAME       STATUS   ROLES                  AGE   VERSION
minikube   Ready    control-plane,master   6d    v1.20.2

$ kubectl cluster-info
Kubernetes control plane is running at https://192.168.39.235:8443
KubeDNS is running at https://192.168.39.235:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

$ kubectl get all -A
NAMESPACE              NAME                                            READY   STATUS    RESTARTS   AGE
default                pod/cmd-nginx-57bb5f6747-hznc7                  1/1     Running   1          4d18h
default                pod/cmd-nginx-57bb5f6747-kmkjr                  1/1     Running   1          4d17h
default                pod/redis-6fb5b985bc-s6gpq                      1/1     Running   0          4d2h
kube-system            pod/coredns-74ff55c5b-qgdjv                     1/1     Running   3          123d
kube-system            pod/etcd-minikube                               1/1     Running   33         123d
kube-system            pod/kube-apiserver-minikube                     1/1     Running   78         123d
kube-system            pod/kube-controller-manager-minikube            1/1     Running   11         123d
kube-system            pod/kube-proxy-x48k4                            1/1     Running   3          123d
kube-system            pod/kube-scheduler-minikube                     1/1     Running   3          123d
kube-system            pod/storage-provisioner                         1/1     Running   133        123d
kubernetes-dashboard   pod/dashboard-metrics-scraper-f6647bd8c-7hgqz   1/1     Running   3          122d
kubernetes-dashboard   pod/kubernetes-dashboard-968bcb79-lktd2         1/1     Running   69         122d
myspace                pod/busybox2                                    1/1     Running   337        88d

NAMESPACE              NAME                                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
default                service/kubernetes                  ClusterIP   10.96.0.1        <none>        443/TCP                  123d
kube-system            service/kube-dns                    ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   123d
kubernetes-dashboard   service/dashboard-metrics-scraper   ClusterIP   10.105.137.234   <none>        8000/TCP                 122d
kubernetes-dashboard   service/kubernetes-dashboard        ClusterIP   10.101.187.187   <none>        80/TCP                   122d

NAMESPACE     NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
kube-system   daemonset.apps/kube-proxy   1         1         1       1            1           kubernetes.io/os=linux   123d

NAMESPACE              NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
default                deployment.apps/cmd-nginx                   1/1     1            1           4d18h
default                deployment.apps/redis                       1/1     1            1           4d2h
kube-system            deployment.apps/coredns                     1/1     1            1           123d
kubernetes-dashboard   deployment.apps/dashboard-metrics-scraper   1/1     1            1           122d
kubernetes-dashboard   deployment.apps/kubernetes-dashboard        1/1     1            1           122d

NAMESPACE              NAME                                                  DESIRED   CURRENT   READY   AGE
default                replicaset.apps/cmd-nginx-57bb5f6747                  1         1         1       4d18h
default                replicaset.apps/redis-6fb5b985bc                      1         1         1       4d2h
kube-system            replicaset.apps/coredns-74ff55c5b                     1         1         1       123d
kubernetes-dashboard   replicaset.apps/dashboard-metrics-scraper-f6647bd8c   1         1         1       122d
kubernetes-dashboard   replicaset.apps/kubernetes-dashboard-968bcb79         1         1         1       122d

```
For further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.      

```
$ kubectl config view
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

## Reference

[Oreilly kubernetes education github repository](https://github.com/sandervanvugt/kubernetes)

[KVM Virtualization on VMware 12](
https://borysneselovskyi.wordpress.com/2018/02/19/kvm-virtualization-on-top-of-the-vmware-workstation-12-guest-vms/)



## Lab
### 02 Operating containers    

```
$ docker run --rm -v /dev/log:/dev/log fedora:latest logger "Message from the container" 
Unable to find image 'fedora:latest' locally
latest: Pulling from library/fedora
70fb9965a23f: Pull complete 
Digest: sha256:0c18a515203b836ea840f7033a11d6833f9468fda6a99f5a29695cfbaf43f24a
Status: Downloaded newer image for fedora:latest

$ journalctl |grep container
...
Oct 03 20:40:39 fedora root[52426]: Message from the container
```

### 04 Running an Application 

#### Deleting pod/deployment    
To start from scratch, check existing deployment/pod, then delete.        

```
$ kubectl get deployment
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           32d

$ kubectl get pod
NAME                         READY   STATUS    RESTARTS   AGE
cmd-nginx-57bb5f6747-tv4sb   1/1     Running   0          31s
```

At this time, the pod runs again with different name because of deployment.   
to clear, need to delete deployment together.   

```
$ kubectl delete deployment cmd-nginx
deployment.apps "cmd-nginx" deleted

$ kubectl get deployment
No resources found in default namespace.

$ kubectl get pod
NAME                         READY   STATUS        RESTARTS   AGE
cmd-nginx-57bb5f6747-tv4sb   0/1     Terminating   0          6m58s
$ kubectl delete pod cmd-nginx-57bb5f6747-tv4sb
pod "cmd-nginx-57bb5f6747-tv4sb" deleted
$ kubectl get pod
No resources found in default namespace.
```

#### pod without a default command


Creating a pod that does not have a default command becomes abnormal status.   
```
$ kubectl create deployment my-dep --image=busybox
deployment.apps/my-dep created
$ kubectl get pod
NAME                      READY   STATUS              RESTARTS   AGE
my-dep-68d7dcffc4-fvzsp   0/1     ContainerCreating   0          10s
$ date;kubectl get pod
Sat 17 Sep 2022 13:18:40 AEST
NAME                      READY   STATUS      RESTARTS   AGE
my-dep-68d7dcffc4-fvzsp   0/1     Completed   0          22s
```

```
$ date;kubectl get pod
Sat 17 Sep 2022 13:18:48 AEST
NAME                      READY   STATUS             RESTARTS   AGE
my-dep-68d7dcffc4-fvzsp   0/1     CrashLoopBackOff   1          30s
```

Check the history.    
```yaml
[junsulee@fedora kube]$ kubectl describe pod my-dep-68d7dcffc4-fvzsp
..
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s       <======
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
..
```

#### Naked pod : not managed by deployment   

```
$ cat busybox.yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox2
  namespace: default
spec:
  containers:
  - name: busy
    image: busybox
    command:
      - sleep
      - "3600" 

$ kubectl create -f busybox.yaml
pod/busybox2 created

$ kubectl get all
NAME           READY   STATUS    RESTARTS   AGE
pod/busybox2   1/1     Running   0          22s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   118d

$ kubectl delete -f busybox.yaml
pod "busybox2" deleted
```

#### Lab 4. Running an Application in Kubernetes

create an example pod again 
```
$ kubectl create deployment cmd-nginx --image=nginx
deployment.apps/cmd-nginx created
$ kubectl get deployment
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   0/1     1            0           8s
$ kubectl get pod
NAME                         READY   STATUS    RESTARTS   AGE
cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          15s

$ kubectl get deployment.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           18h

```

Create yaml referring existing apps.

```
$ kubectl get deployment.apps -o yaml > myngnix.yaml

$ cat myngnix.yaml
apiVersion: v1
items:
- apiVersion: apps/v1
  kind: Deployment
  metadata:
    annotations:
      deployment.kubernetes.io/revision: "1"
    creationTimestamp: "2022-06-24T05:14:35Z"
    generation: 1
    labels:
      app: cmd-nginx
    name: cmd-nginx
    namespace: default
    resourceVersion: "1619298"
    uid: ab2c24aa-c432-42b0-ad9a-7340019c1c5c
  spec:
    progressDeadlineSeconds: 600
    replicas: 1
    revisionHistoryLimit: 10
    selector:
      matchLabels:
        app: cmd-nginx
    strategy:
      rollingUpdate:
        maxSurge: 25%
        maxUnavailable: 25%
      type: RollingUpdate
    template:
      metadata:
        creationTimestamp: null
        labels:
          app: cmd-nginx
      spec:
        containers:
        - image: nginx
          imagePullPolicy: Always
          name: nginx
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
        dnsPolicy: ClusterFirst
        restartPolicy: Always
        schedulerName: default-scheduler
        securityContext: {}
        terminationGracePeriodSeconds: 30
  status:
    availableReplicas: 1
    conditions:
    - lastTransitionTime: "2022-06-24T05:14:48Z"
      lastUpdateTime: "2022-06-24T05:14:48Z"
      message: Deployment has minimum availability.
      reason: MinimumReplicasAvailable
      status: "True"
      type: Available
    - lastTransitionTime: "2022-06-24T05:14:35Z"
      lastUpdateTime: "2022-06-24T05:14:48Z"
      message: ReplicaSet "cmd-nginx-57bb5f6747" has successfully progressed.
      reason: NewReplicaSetAvailable
      status: "True"
      type: Progressing
    observedGeneration: 1
    readyReplicas: 1
    replicas: 1
    updatedReplicas: 1
kind: List
metadata:
  resourceVersion: ""
  selfLink: ""

```

Remove unnecessary parts. ( creationTimestamp, resourceVersion, uid, status etc)     

```
$ cp myngnix.yaml myngnix_org.yaml

$ cat myngnix.yaml
apiVersion: v1
items:
- apiVersion: apps/v1
  kind: Deployment
  metadata:
    annotations:
      deployment.kubernetes.io/revision: "1"
    generation: 1
    labels:
      app: cmd-nginx
    name: cmd-nginx
    namespace: default
  spec:
    progressDeadlineSeconds: 600
    replicas: 1
    revisionHistoryLimit: 10
    selector:
      matchLabels:
        app: cmd-nginx
    strategy:
      rollingUpdate:
        maxSurge: 25%
        maxUnavailable: 25%
      type: RollingUpdate
    template:
      metadata:
        creationTimestamp: null
        labels:
          app: cmd-nginx
      spec:
        containers:
        - image: nginx
          imagePullPolicy: Always
          name: nginx
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
        dnsPolicy: ClusterFirst
        restartPolicy: Always
        schedulerName: default-scheduler
        securityContext: {}
        terminationGracePeriodSeconds: 30

$ diff myngnix_org.yaml myngnix.yaml
8d7
<     creationTimestamp: "2022-06-24T05:14:35Z"
14,15d12
<     resourceVersion: "1619298"
<     uid: ab2c24aa-c432-42b0-ad9a-7340019c1c5c
46,68d42
<   status:
<     availableReplicas: 1
<     conditions:
<     - lastTransitionTime: "2022-06-24T05:14:48Z"
<       lastUpdateTime: "2022-06-24T05:14:48Z"
<       message: Deployment has minimum availability.
<       reason: MinimumReplicasAvailable
<       status: "True"
<       type: Available
<     - lastTransitionTime: "2022-06-24T05:14:35Z"
<       lastUpdateTime: "2022-06-24T05:14:48Z"
<       message: ReplicaSet "cmd-nginx-57bb5f6747" has successfully progressed.
<       reason: NewReplicaSetAvailable
<       status: "True"
<       type: Progressing
<     observedGeneration: 1
<     readyReplicas: 1
<     replicas: 1
<     updatedReplicas: 1
< kind: List
< metadata:
<   resourceVersion: ""
<   selfLink: ""

```

### 05 Managing application    

#### Labels   
Many k8s API Objects are using labels to connect to other objects.     

```
$ kubectl get all --show-labels
NAME                             READY   STATUS    RESTARTS   AGE   LABELS
pod/cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          20h   app=cmd-nginx,pod-template-hash=57bb5f6747

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE   LABELS
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   34d   component=apiserver,provider=kubernetes

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE   LABELS
deployment.apps/cmd-nginx   1/1     1            1           20h   app=cmd-nginx

NAME                                   DESIRED   CURRENT   READY   AGE   LABELS
replicaset.apps/cmd-nginx-57bb5f6747   1         1         1       20h   app=cmd-nginx,pod-template-hash=57bb5f6747
[junsulee@fedora work]$ kubectl label pods ^C
[junsulee@fedora work]$ kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          20h
```
Set Label
```
$ kubectl label pods cmd-nginx-57bb5f6747-bgqz4 app-
pod/cmd-nginx-57bb5f6747-bgqz4 labeled
$ kubectl get all --show-labels
NAME                             READY   STATUS    RESTARTS   AGE   LABELS
pod/cmd-nginx-57bb5f6747-6clxd   1/1     Running   0          44s   app=cmd-nginx,pod-template-hash=57bb5f6747
pod/cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          20h   pod-template-hash=57bb5f6747

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE   LABELS
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   34d   component=apiserver,provider=kubernetes

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE   LABELS
deployment.apps/cmd-nginx   1/1     1            1           20h   app=cmd-nginx

NAME                                   DESIRED   CURRENT   READY   AGE   LABELS
replicaset.apps/cmd-nginx-57bb5f6747   1         1         1       20h   app=cmd-nginx,pod-template-hash=57bb5f6747
```
Using `app0` removes the label part `app=cmd-nginx` from existing pod label, k8s created new pod with the existing name   
because k8s monitors the label and make sure specific amount of the label is available.     
It means k8s does not look at the pod itself but looking at the `label`.      


Display all objects with a specific label.    
```
$ kubectl get all --selector app=cmd-nginx
NAME                             READY   STATUS    RESTARTS   AGE
pod/cmd-nginx-57bb5f6747-kmkjr   1/1     Running   0          14m

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cmd-nginx   1/1     1            1           52m

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/cmd-nginx-57bb5f6747   1         1         1       52m
```

#### Running an application   

Do not use naked pods as it misses k8s benefits such as scalability etc.     
Better to use with a deployment that monitors and manages a pod.    

`Deployment` specification from `template`.    

```yaml 
junsulee@fedora kubernetes]$ cat redis-deploy.yaml
---
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: redis
  labels:
    app: redis
spec:
  selector:
    matchLabels:
      app: redis
  replicas:
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:alpine
        ports:
        - containerPort: 6379
          name: redis
```

Error due to wrong version.     
```
[junsulee@fedora kubernetes]$ kubectl create -f redis-deploy.yaml
error: unable to recognize "redis-deploy.yaml": no matches for kind "Deployment" in version "apps/v1beta
```

Correcting and creating again.     
`apiVersion: apps/v1beta1`  =>  `apiVersion: apps/v1`     

``` 
[junsulee@fedora kubernetes]$ kubectl create -f redis-deploy.yaml
deployment.apps/redis created
[junsulee@fedora kubernetes]$ kubectl get deployment
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           20h
redis       0/1     1            0           9s     <====
[junsulee@fedora kubernetes]$ kubectl get pods
NAME                         READY   STATUS              RESTARTS   AGE
cmd-nginx-57bb5f6747-6clxd   1/1     Running             0          39m
cmd-nginx-57bb5f6747-bgqz4   1/1     Running             0          20h
redis-6fb5b985bc-6q7fk       0/1     ContainerCreating   0          16s  <=====  

[junsulee@fedora kubernetes]$ kubectl get deployment --show-labels
NAME        READY   UP-TO-DATE   AVAILABLE   AGE    LABELS
cmd-nginx   1/1     1            1           20h    app=cmd-nginx
redis       1/1     1            1           2m8s   app=redis
[junsulee@fedora kubernetes]$ kubectl get all --selector app=redis
NAME                         READY   STATUS    RESTARTS   AGE
pod/redis-6fb5b985bc-6q7fk   1/1     Running   0          2m21s

NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/redis   1/1     1            1           2m21s

NAME                               DESIRED   CURRENT   READY   AGE
replicaset.apps/redis-6fb5b985bc   1         1         1       2m21s

```   

#### namespace 

Download namespace related utilities.     
```
git clone https://github.com/ahmetb/kubectx  # Download kubectx packages.    
sudo cp kubectx/kubensx /usr/local/bin
sudo cp kubectx/kubens /usr/local/bin
```

Namespace list    
```
[junsulee@fedora kubernetes]$ kubens
default
kube-node-lease
kube-public
kube-system
kubernetes-dashboard

[junsulee@fedora kubernetes]$ kubectl get ns
NAME                   STATUS   AGE
default                Active   34d
kube-node-lease        Active   34d
kube-public            Active   34d
kube-system            Active   34d
kubernetes-dashboard   Active   33d
```

Switching between namespaces
```
[junsulee@fedora kubernetes]$ kubens kube-system
Context "minikube" modified.
Active namespace is "kube-system".
[junsulee@fedora kubernetes]$ kubectl get all
NAME                                   READY   STATUS    RESTARTS   AGE
pod/coredns-74ff55c5b-qgdjv            1/1     Running   1          34d
pod/etcd-minikube                      1/1     Running   26         34d
pod/kube-apiserver-minikube            1/1     Running   60         34d
pod/kube-controller-manager-minikube   1/1     Running   3          34d
pod/kube-proxy-x48k4                   1/1     Running   1          34d
pod/kube-scheduler-minikube            1/1     Running   1          34d
pod/storage-provisioner                1/1     Running   107        34d

NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
service/kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   34d

NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
daemonset.apps/kube-proxy   1         1         1       1            1           kubernetes.io/os=linux   34d

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/coredns   1/1     1            1           34d

NAME                                DESIRED   CURRENT   READY   AGE
replicaset.apps/coredns-74ff55c5b   1         1         1       34d
[junsulee@fedora kubernetes]$ kubens
default
kube-node-lease
kube-public
kube-system
kubernetes-dashboard
[junsulee@fedora kubernetes]$ kubens default
Context "minikube" modified.
Active namespace is "default".
[junsulee@fedora kubernetes]$ kubectl get all
NAME                             READY   STATUS    RESTARTS   AGE
pod/cmd-nginx-57bb5f6747-6clxd   1/1     Running   0          89m
pod/cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          21h
pod/redis-6fb5b985bc-6q7fk       1/1     Running   0          50m

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   34d

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cmd-nginx   1/1     1            1           21h
deployment.apps/redis       1/1     1            1           50m

NAME                                   DESIRED   CURRENT   READY   AGE
replicaset.apps/cmd-nginx-57bb5f6747   1         1         1       21h
replicaset.apps/redis-6fb5b985bc       1         1         1       50m
```

K8s current configuration
```
[junsulee@fedora kubernetes]$ cd
[junsulee@fedora ~]$ cd .kube
[junsulee@fedora .kube]$ cat config
apiVersion: v1
clusters:
- cluster:
    certificate-authority: /home/junsulee/.minikube/ca.crt
    extensions:
    - extension:
        last-update: Wed, 22 Jun 2022 12:12:20 AEST
        provider: minikube.sigs.k8s.io
        version: v1.20.0
      name: cluster_info
    server: https://192.168.39.25:8443
  name: minikube
contexts:
- context:
    cluster: minikube
    extensions:
    - extension:
        last-update: Wed, 22 Jun 2022 12:12:20 AEST
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


Dashboard related resources    
```
[junsulee@fedora kube]$ kubectl get all -n kubernetes-dashboard
NAME                                            READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-f6647bd8c-7hgqz   1/1     Running   3          118d
pod/kubernetes-dashboard-968bcb79-lktd2         1/1     Running   69         118d

NAME                                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/dashboard-metrics-scraper   ClusterIP   10.105.137.234   <none>        8000/TCP   118d
service/kubernetes-dashboard        ClusterIP   10.101.187.187   <none>        80/TCP     118d

NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/dashboard-metrics-scraper   1/1     1            1           118d
deployment.apps/kubernetes-dashboard        1/1     1            1           118d

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/dashboard-metrics-scraper-f6647bd8c   1         1         1       118d
replicaset.apps/kubernetes-dashboard-968bcb79         1         1         1       118d
```

K8s core related resources
```
[junsulee@fedora kube]$ kubectl get all -n kube-system 
NAME                                   READY   STATUS    RESTARTS   AGE
pod/coredns-74ff55c5b-qgdjv            1/1     Running   3          119d
pod/etcd-minikube                      1/1     Running   33         119d
pod/kube-apiserver-minikube            1/1     Running   78         119d
pod/kube-controller-manager-minikube   1/1     Running   11         119d
pod/kube-proxy-x48k4                   1/1     Running   3          119d
pod/kube-scheduler-minikube            1/1     Running   3          119d
pod/storage-provisioner                1/1     Running   132        119d

NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
service/kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   119d

NAME                        DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
daemonset.apps/kube-proxy   1         1         1       1            1           kubernetes.io/os=linux   119d

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/coredns   1/1     1            1           119d

NAME                                DESIRED   CURRENT   READY   AGE
replicaset.apps/coredns-74ff55c5b   1         1         1       119d
```


Create a namespace and a pod on the namespace.
```

[junsulee@fedora .kube]$ kubectl create ns myspace
namespace/myspace created

[junsulee@fedora kubernetes]$ kubens
default  <=== current
kube-node-lease
kube-public
kube-system
kubernetes-dashboard
myspace   <=== new

[junsulee@fedora kubernetes]$ kubectl create -f busybox.yaml
pod/busybox2 created


# expected error creating same name pod in the same namespace
[junsulee@fedora kubernetes]$ kubectl create -f busybox.yaml
Error from server (AlreadyExists): error when creating "busybox.yaml": pods "busybox2" already exists

[junsulee@fedora kubernetes]$ cp busybox.yaml busbox2.yaml

# corrected namespace
[junsulee@fedora kubernetes]$ cat busybox2.yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox2
  namespace: myspace
spec:
  containers:
  - name: busy
    image: busybox
    command:
      - sleep
      - "3600"

[junsulee@fedora kubernetes]$ kubectl create -f busybox2.yaml
pod/busybox2 created

[junsulee@fedora kubernetes]$ kubectl get all -n myspace
NAME           READY   STATUS    RESTARTS   AGE
pod/busybox2   1/1     Running   0          92s
```

#### managing scailability : num of replicas

```
junsulee@fedora kubernetes]$ kubectl get deployments.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           22h
redis       1/1     1            1           81m

[junsulee@fedora kubernetes]$ kubectl edit deployment cmd-nginx   # change `replicas` from 1 to 2
deployment.apps/cmd-nginx edited


[junsulee@fedora kubernetes]$ kubectl get deployments.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   2/2     2            2           22h
redis       1/1     1            1           86m

[junsulee@fedora kubernetes]$ kubectl get deployments.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   2/2     2            2           22h
redis       1/1     1            1           86m 

[junsulee@fedora kubernetes]$ kubectl scale --replicas=1 cmd-nginx
error: the server doesn't have a resource type "cmd-nginx"
[junsulee@fedora kubernetes]$ kubectl scale --replicas=1 deployment cmd-nginx
deployment.apps/cmd-nginx scaled

[junsulee@fedora kubernetes]$ kubectl get deployments.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           22h
redis       1/1     1            1           102m
```

#### Managing application updates and rollbacks    

Create a pod for test
```
[junsulee@fedora kubernetes]$ kubectl create deployment rollingnginx --image=nginx:1.8
deployment.apps/rollingnginx created
[junsulee@fedora kubernetes]$ kubectl get all
NAME                                READY   STATUS      RESTARTS   AGE
...
pod/rollingnginx-785db9758d-7k6zc   1/1     Running     0          62s
...

[junsulee@fedora kubernetes]$ kubectl rollout history deployment
deployment.apps/cmd-nginx
REVISION  CHANGE-CAUSE
1         <none>

deployment.apps/redis
REVISION  CHANGE-CAUSE
1         <none>

deployment.apps/rollingnginx
REVISION  CHANGE-CAUSE
1         <none>
```

Edit version.
```
[junsulee@fedora kubernetes]$ kubectl edit deployments.apps rollingnginx
..
- image: nginx:1.8    <=== changed to 1.15
..

[junsulee@fedora kubernetes]$ kubectl rollout history deployment
deployment.apps/cmd-nginx
REVISION  CHANGE-CAUSE
1         <none>

deployment.apps/redis
REVISION  CHANGE-CAUSE
1         <none>

deployment.apps/rollingnginx
REVISION  CHANGE-CAUSE
1         <none>
2         <none>     <======


[junsulee@fedora kubernetes]$ kubectl describe deployments.apps rollingnginx
Name:                   rollingnginx
Namespace:              default
CreationTimestamp:      Sat, 25 Jun 2022 14:03:49 +1000
Labels:                 app=rollingnginx
Annotations:            deployment.kubernetes.io/revision: 2    <====
Selector:               app=rollingnginx
Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  app=rollingnginx
  Containers:
   nginx:
    Image:        nginx:1.15
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <none>
NewReplicaSet:   rollingnginx-58cff98f76 (1/1 replicas created)
Events:
  Type    Reason             Age    From                   Message
  ----    ------             ----   ----                   -------
  Normal  ScalingReplicaSet  8m51s  deployment-controller  Scaled up replica set rollingnginx-785db9758d to 1
  Normal  ScalingReplicaSet  104s   deployment-controller  Scaled up replica set rollingnginx-58cff98f76 to 1
  Normal  ScalingReplicaSet  62s    deployment-controller  Scaled down replica set rollingnginx-785db9758d to 0
```

Check version for each revision.    
```

[junsulee@fedora kubernetes]$ kubectl rollout history deployment rollingnginx --revision=1
deployment.apps/rollingnginx with revision #1
Pod Template:
  Labels:	app=rollingnginx
	pod-template-hash=785db9758d
  Containers:
   nginx:
    Image:	nginx:1.8     <====
    Port:	<none>
    Host Port:	<none>
    Environment:	<none>
    Mounts:	<none>
  Volumes:	<none>

$ kubectl rollout history deployment rollingnginx --revision=2
deployment.apps/rollingnginx with revision #2
Pod Template:
  Labels:	app=rollingnginx
	pod-template-hash=58cff98f76
  Containers:
   nginx:
    Image:	nginx:1.15    <====
    Port:	<none>
    Host Port:	<none>
    Environment:	<none>
    Mounts:	<none>
  Volumes:	<none>
```

Two replica sets are shown. Old one will be gone eventually.   
While old replica set is still being displayed, you can do rollback.     
```
$ kubectl get all
NAME                                READY   STATUS    RESTARTS   AGE
pod/busybox2                        1/1     Running   1          72m
pod/cmd-nginx-57bb5f6747-6clxd      1/1     Running   0          173m
pod/cmd-nginx-57bb5f6747-bgqz4      1/1     Running   0          23h
pod/redis-6fb5b985bc-6q7fk          1/1     Running   0          134m
pod/rollingnginx-58cff98f76-997zw   1/1     Running   0          6m15s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   34d

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cmd-nginx      1/1     1            1           23h
deployment.apps/redis          1/1     1            1           134m
deployment.apps/rollingnginx   1/1     1            1           13m

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/cmd-nginx-57bb5f6747      1         1         1       23h
replicaset.apps/redis-6fb5b985bc          1         1         1       134m
replicaset.apps/rollingnginx-58cff98f76   1         1         1       6m17s    <=== new revision   
replicaset.apps/rollingnginx-785db9758d   0         0         0       13m      <=== old one is emptied.    
```

Rollback 
```
$ kubectl rollout undo deployment rollingnginx --to-revision=1
deployment.apps/rollingnginx rolled back

$ kubectl get all
NAME                                READY   STATUS    RESTARTS   AGE
pod/busybox2                        1/1     Running   1          76m
pod/cmd-nginx-57bb5f6747-6clxd      1/1     Running   0          177m
pod/cmd-nginx-57bb5f6747-bgqz4      1/1     Running   0          23h
pod/redis-6fb5b985bc-6q7fk          1/1     Running   0          138m
pod/rollingnginx-785db9758d-kzgd5   1/1     Running   0          79s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   34d

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cmd-nginx      1/1     1            1           23h
deployment.apps/redis          1/1     1            1           138m
deployment.apps/rollingnginx   1/1     1            1           16m

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/cmd-nginx-57bb5f6747      1         1         1       23h
replicaset.apps/redis-6fb5b985bc          1         1         1       138m
replicaset.apps/rollingnginx-58cff98f76   0         0         0       9m45s
replicaset.apps/rollingnginx-785db9758d   1         1         1       16m   <==== pod went to old one   

```

#### Lab 05 Managing deployment    

Create yaml file only. ( --dry-run  )       
```
$ kubectl create deployment lab5-nginx --image=nginx --dry-run --output=yaml > lab5-nginx.yaml
```

Change.    
```yaml
$ cat lab5-nginx.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: lab5-ngnix
  name: lab5-ngnix
spec:
  replicas: 3     ## 1 -> 3
  selector:
    matchLabels:
      app: lab5-ngnix
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: lab5-ngnix
    spec:
      containers:
      - image: ngnix:1.8  ## ngnix : latest version. specify preferred version.    
        name: ngnix
        resources: {}
status: {}
```

```
$ kubectl create -f lab5-nginx.yaml  # create
$ kubectl get all --selector app=lab5-nginx  # list all resources with the tabel   

NAME                              READY   STATUS    RESTARTS   AGE
pod/lab5-nginx-75588bfdc4-4vkzv   1/1     Running   0          56s
pod/lab5-nginx-75588bfdc4-78ms9   1/1     Running   0          56s
pod/lab5-nginx-75588bfdc4-98krb   1/1     Running   0          56s

NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/lab5-nginx   3/3     3            3           56s

NAME                                    DESIRED   CURRENT   READY   AGE
replicaset.apps/lab5-nginx-75588bfdc4   3         3         3       56s


$ kubectl scale deployment lab5-nginx --replicas=4   # increase   

$ kubectl get all --selector app=lab5-nginx
NAME                              READY   STATUS    RESTARTS   AGE
pod/lab5-nginx-75588bfdc4-4vkzv   1/1     Running   0          2m15s
pod/lab5-nginx-75588bfdc4-78ms9   1/1     Running   0          2m15s
pod/lab5-nginx-75588bfdc4-98krb   1/1     Running   0          2m15s
pod/lab5-nginx-75588bfdc4-r8m2f   1/1     Running   0          12s

NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/lab5-nginx   4/4     4            4           2m15s

NAME                                    DESIRED   CURRENT   READY   AGE
replicaset.apps/lab5-nginx-75588bfdc4   4         4         4       2m15s
```


```
$ kubectl edit deployments.apps lab5-nginx   # change the version  
...
      containers:
      - image: nginx
...

[root@api.jscp4d.cp.fyre.ibm.com work]# kubectl get all --selector app=lab5-nginx
NAME                              READY   STATUS    RESTARTS   AGE
pod/lab5-nginx-75f4f8d9f7-295vn   1/1     Running   0          27s
pod/lab5-nginx-75f4f8d9f7-7rs9c   1/1     Running   0          17s
pod/lab5-nginx-75f4f8d9f7-ldcs6   1/1     Running   0          27s
pod/lab5-nginx-75f4f8d9f7-xl98h   1/1     Running   0          17s

NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/lab5-nginx   4/4     4            4           4m48s

NAME                                    DESIRED   CURRENT   READY   AGE
replicaset.apps/lab5-nginx-75588bfdc4   0         0         0       4m48s
replicaset.apps/lab5-nginx-75f4f8d9f7   4         4         4       27s     <===== new version  deployment     

```

### 06 Exposing applications (Networking)      

Create a yaml with multiple pods.     
Not caring about what the pods do but focusing on how network is organized.      
```yaml
$ cat busybox_multi.yaml
apiVersion: v1
kind: Pod
metadata:
  name: verybusy
  namespace: default
spec:
  containers:
  - name: busy
    image: busybox
    command:
      - sleep
      - "3600" 
  - name: box
    image: busybox
    command:
      - sleep
      - "3600" 


$ kubectl create -f busybox_multi.yaml
pod/verybusy created
```

Each pod has its own IP addresses.   

```
$ kubectl get pods -o wide
NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE       NOMINATED NODE   READINESS GATES
cmd-nginx-57bb5f6747-hznc7      1/1     Running   1          5d23h   172.17.0.5    minikube   <none>           <none>
cmd-nginx-57bb5f6747-kmkjr      1/1     Running   1          5d23h   172.17.0.3    minikube   <none>           <none>
lab5-nginx-7777d7964c-5pc68     1/1     Running   0          33m     172.17.0.13   minikube   <none>           <none>
lab5-nginx-7777d7964c-rkfz2     1/1     Running   0          33m     172.17.0.14   minikube   <none>           <none>
lab5-nginx-7777d7964c-v9kn6     1/1     Running   0          33m     172.17.0.15   minikube   <none>           <none>
lab5-nginx-7777d7964c-vdlxm     1/1     Running   0          33m     172.17.0.11   minikube   <none>           <none>
redis-6fb5b985bc-s6gpq          1/1     Running   0          5d8h    172.17.0.8    minikube   <none>           <none>
rollingnginx-785db9758d-p5k8v   1/1     Running   0          25h     172.17.0.9    minikube   <none>           <none>
verybusy                        2/2     Running   0          42s     172.17.0.10   minikube   <none>           <none>      <======
```

IP address is POD property, not container's.       

```
$ kubectl describe pod verybusy
Name:         verybusy
Namespace:    default
Priority:     0
Node:         minikube/192.168.39.25
Start Time:   Fri, 23 Sep 2022 14:50:30 +1000
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           172.17.0.10
IPs:
  IP:  172.17.0.10     # <==========
Containers:
  busy:
    Container ID:  docker://995e596ca7c7953c21955db1506f724d57db17251440c397878efed8714a61a2
    Image:         busybox
    Image ID:      docker-pullable://busybox@sha256:ad9bd57a3a57cc95515c537b89aaa69d83a6df54c4050fcf2b41ad367bec0cd5
    Port:          <none>
    Host Port:     <none>
    Command:
      sleep
      3600
    State:          Running
      Started:      Fri, 23 Sep 2022 14:50:44 +1000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-vrnvj (ro)
  box:
    Container ID:  docker://e1beec661f02024c461cb72bf8013661a781c8ae1d6d65c5e01936c3ab9e6d08
    Image:         busybox
    Image ID:      docker-pullable://busybox@sha256:ad9bd57a3a57cc95515c537b89aaa69d83a6df54c4050fcf2b41ad367bec0cd5
    Port:          <none>
    Host Port:     <none>
    Command:
      sleep
      3600
    State:          Running
      Started:      Fri, 23 Sep 2022 14:50:50 +1000
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-vrnvj (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             True 
  ContainersReady   True 
  PodScheduled      True 
Volumes:
  default-token-vrnvj:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-vrnvj
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  5m47s  default-scheduler  Successfully assigned default/verybusy to minikube
  Normal  Pulling    5m41s  kubelet            Pulling image "busybox"
  Normal  Pulled     5m37s  kubelet            Successfully pulled image "busybox" in 4.068525177s
  Normal  Created    5m35s  kubelet            Created container busy
  Normal  Started    5m33s  kubelet            Started container busy
  Normal  Pulling    5m33s  kubelet            Pulling image "busybox"
  Normal  Pulled     5m29s  kubelet            Successfully pulled image "busybox" in 3.699821125s
  Normal  Created    5m27s  kubelet            Created container box
  Normal  Started    5m26s  kubelet            Started container box
```

Log into containers and check ip address.  
Both container shows the same IP address.   
Note that conatiner is not a virtual machine but an application.       

```
$ kubectl exec -it verybusy -c busy /bin/sh
kubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.
/ # 
/ # ip a
..
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop qlen 1000
    link/sit 0.0.0.0 brd 0.0.0.0
60: eth0@if61: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:ac:11:00:0a brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.10/16 brd 172.17.255.255 scope global eth0     <======
       valid_lft forever preferred_lft forever
/ # exit


$ kubectl exec -it verybusy -c box /bin/sh
kubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.
/ # ip ad
...
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop qlen 1000
    link/sit 0.0.0.0 brd 0.0.0.0
60: eth0@if61: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:ac:11:00:0a brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.10/16 brd 172.17.255.255 scope global eth0     <======
       valid_lft forever preferred_lft forever


```

What if one conatiner wants to connect to other container ?    
It's same as multiple application in a server using internal IP stack, IPC or port forwarding. K8s pos is not different.              
Pod is ultimate entity having an ip address.      


#### Expose a deployment   

```
[junsulee@fedora kubernetes]$ kubectl get svc
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   125d
[junsulee@fedora kubernetes]$ kubectl get deployment
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx      1/1     1            1           6d
lab5-nginx     4/4     4            4           105m
redis          1/1     1            1           5d9h
rollingnginx   1/1     1            1           26h
[junsulee@fedora kubernetes]$ kubectl expose deployment rollingnginx --port=80 --target-port=80
service/rollingnginx exposed
[junsulee@fedora kubernetes]$ kubectl get svc
NAME           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE
kubernetes     ClusterIP   10.96.0.1        <none>        443/TCP   125d
rollingnginx   ClusterIP   10.100.255.163   <none>        80/TCP    4s      <=====

[junsulee@fedora kubernetes]$ kubectl describe svc rollingnginx
Name:              rollingnginx
Namespace:         default
Labels:            app=rollingnginx  <==== service uses Label   
Annotations:       <none>
Selector:          app=rollingnginx
Type:              ClusterIP
IP Families:       <none>
IP:                10.100.255.163    <=====
IPs:               10.100.255.163
Port:              <unset>  80/TCP   <======
TargetPort:        80/TCP
Endpoints:         172.17.0.9:80     <=====
Session Affinity:  None
Events:            <none>

[junsulee@fedora kubernetes]$ kubectl get pod -o wide
NAME                            READY   STATUS    RESTARTS   AGE    IP            NODE       NOMINATED NODE   READINESS GATES
...
rollingnginx-785db9758d-p5k8v   1/1     Running   0          26h    172.17.0.9    minikube   <none>           <none>  <====
...
```

#### Scaling the deployment will add IP Endpoints as PODs increases.     
```
[junsulee@fedora kubernetes]$ kubectl describe svc rollingnginx
Name:              rollingnginx
Namespace:         default
Labels:            app=rollingnginx
Annotations:       <none>
Selector:          app=rollingnginx
Type:              ClusterIP
IP Families:       <none>
IP:                10.100.255.163
IPs:               10.100.255.163
Port:              <unset>  80/TCP
TargetPort:        80/TCP
Endpoints:         172.17.0.12:80,172.17.0.16:80,172.17.0.17:80 + 1 more...     <====
Session Affinity:  None
Events:
  Type     Reason                        Age   From                       Message
  ----     ------                        ----  ----                       -------
  Warning  FailedToUpdateEndpointSlices  11s   endpoint-slice-controller  Error updating Endpoint Slices for Service default/rollingnginx: failed to update rollingnginx-5fgpm EndpointSlice for Service default/rollingnginx: Operation cannot be fulfilled on endpointslices.discovery.k8s.io "rollingnginx-5fgpm": the object has been modified; please apply your changes to the latest version and try again


[junsulee@fedora kubernetes]$ kubectl get pod -o wide
NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE       NOMINATED NODE   READINESS GATES
...
rollingnginx-785db9758d-npzw7   1/1     Running   0          3m14s   172.17.0.12   minikube   <none>           <none>
rollingnginx-785db9758d-p5k8v   1/1     Running   0          26h     172.17.0.9    minikube   <none>           <none>
rollingnginx-785db9758d-szglg   1/1     Running   0          3m13s   172.17.0.17   minikube   <none>           <none>
rollingnginx-785db9758d-vpwc7   1/1     Running   0          3m13s   172.17.0.16   minikube   <none>           <none>
...
```

Working with yaml file,  it contains everything for service.  
Not much information.  
`Label` and `selector` is important.     
Services is not connect to an one deployment.    
```
$ kubectl expose deployment rollingnginx --port=80 --target-port=80 --dry-run -o yaml > svc.yaml

$ cat svc.yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:   
    app: rollingnginx
  name: rollingnginx
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector: 
    app: rollingnginx
status:
  loadBalancer: {}
```

#### Using DNS in k8s.   

K8s DNS service 
```
[junsulee@fedora work]$ kubectl get pods -n kube-system -o wide
NAME                               READY   STATUS    RESTARTS   AGE    IP              NODE       NOMINATED NODE   READINESS GATES
coredns-74ff55c5b-qgdjv            1/1     Running   3          125d   172.17.0.4      minikube   <none>           <none>        <==========
etcd-minikube                      1/1     Running   35         125d   192.168.39.25   minikube   <none>           <none>
kube-apiserver-minikube            1/1     Running   83         125d   192.168.39.25   minikube   <none>           <none>
kube-controller-manager-minikube   1/1     Running   11         125d   192.168.39.25   minikube   <none>           <none>
kube-proxy-x48k4                   1/1     Running   3          125d   192.168.39.25   minikube   <none>           <none>
kube-scheduler-minikube            1/1     Running   3          125d   192.168.39.25   minikube   <none>           <none>
storage-provisioner                1/1     Running   139        125d   192.168.39.25   minikube   <none>           <none>


[junsulee@fedora work]$ kubectl describe pod coredns-74ff55c5b-qgdjv -n kube-system
Name:                 coredns-74ff55c5b-qgdjv
Namespace:            kube-system
Priority:             2000000000
Priority Class Name:  system-cluster-critical
Node:                 minikube/192.168.39.25
Start Time:           Sat, 21 May 2022 15:12:15 +1000
Labels:               k8s-app=kube-dns
                      pod-template-hash=74ff55c5b
Annotations:          <none>
Status:               Running
IP:                   172.17.0.4
IPs:
  IP:           172.17.0.4
Controlled By:  ReplicaSet/coredns-74ff55c5b
Containers:
  coredns:
    Container ID:  docker://2f577513304ad5e32f49f69d054f26b5a9d9c0b595dce7741bca319b7817f486
    Image:         k8s.gcr.io/coredns:1.7.0
    Image ID:      docker-pullable://k8s.gcr.io/coredns@sha256:73ca82b4ce829766d4f1f10947c3a338888f876fbed0540dc849c89ff256e90c
    Ports:         53/UDP, 53/TCP, 9153/TCP
    Host Ports:    0/UDP, 0/TCP, 0/TCP
    Args:
      -conf
      /etc/coredns/Corefile
    State:          Running
      Started:      Sun, 18 Sep 2022 06:33:23 +1000
    Last State:     Terminated
      Reason:       Error
      Exit Code:    255
      Started:      Sat, 17 Sep 2022 12:10:25 +1000
      Finished:     Sun, 18 Sep 2022 06:28:42 +1000
    Ready:          True
    Restart Count:  3
    Limits:
      memory:  170Mi
    Requests:
      cpu:        100m
      memory:     70Mi
    Liveness:     http-get http://:8080/health delay=60s timeout=5s period=10s #success=1 #failure=5
    Readiness:    http-get http://:8181/ready delay=0s timeout=1s period=10s #success=1 #failure=3
    Environment:  <none>
    Mounts:
      /etc/coredns from config-volume (ro)
      /var/run/secrets/kubernetes.io/serviceaccount from coredns-token-dwpds (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             True 
  ContainersReady   True 
  PodScheduled      True 
Volumes:
  config-volume:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      coredns
    Optional:  false
  coredns-token-dwpds:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  coredns-token-dwpds
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  kubernetes.io/os=linux
Tolerations:     CriticalAddonsOnly op=Exists
                 node-role.kubernetes.io/control-plane:NoSchedule
                 node-role.kubernetes.io/master:NoSchedule
                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:          <none>


```

#### nslookup    

Create a pod from where we can run `nslookup` command.    
```
$ cat busybox.yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox
  namespace: default
spec:
  containers:
  - name: busy
    image: busybox
    command:
      - sleep
      - "3600" 

$ kubectl create -f busybox.yaml
pod/busybox created

```

Check existing services
```
[junsulee@fedora kubernetes]$ kubectl get svc -o wide
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE    SELECTOR
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   125d   <none>
```

`nslookup`      
```
[junsulee@fedora kubernetes]$ kubectl exec -it busybox -- nslookup kubernetes
Server:		10.96.0.10    <=== name server
Address:	10.96.0.10:53

Name:	kubernetes.default.svc.cluster.local
Address: 10.96.0.1      <=====

*** Can't find kubernetes.svc.cluster.local: No answer
*** Can't find kubernetes.cluster.local: No answer
*** Can't find kubernetes.default.svc.cluster.local: No answer
*** Can't find kubernetes.svc.cluster.local: No answer
*** Can't find kubernetes.cluster.local: No answer

```

K8s automatically adds DNS configuration to pods.     
```
$ kubectl exec -it busybox -- cat /etc/resolv.conf
nameserver 10.96.0.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

Example from an OCP.    
```
root@bastion ~]# kubectl exec -it c-db2oltp-1655862364134421-db2u-0 cat /etc/resolv.conf
kubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.
search sandy.svc.cluster.local svc.cluster.local cluster.local js.ocp.adl
nameserver 136.32.0.10
options ndots:2
```

#### Ingress

- HTTP/HTTPS
- Services get externally reachable URLs
- can load balance
- can take care of TLS/SSL termination.   
- Needs an Ingress Controller to do the work.     

> Other services types are exposed using the `NodePort` or `LoadBalancer` Service type.     


Enable ingress.   

```
$ minikube addons list
|-----------------------------|----------|--------------|
|         ADDON NAME          | PROFILE  |    STATUS    |
|-----------------------------|----------|--------------|
| ambassador                  | minikube | disabled     |
| auto-pause                  | minikube | disabled     |
| csi-hostpath-driver         | minikube | disabled     |
| dashboard                   | minikube | enabled ✅   |
| default-storageclass        | minikube | enabled ✅   |
| efk                         | minikube | disabled     |
| freshpod                    | minikube | disabled     |
| gcp-auth                    | minikube | disabled     |
| gvisor                      | minikube | disabled     |
| helm-tiller                 | minikube | disabled     |
| ingress                     | minikube | disabled     |
| ingress-dns                 | minikube | disabled     |
| istio                       | minikube | disabled     |
| istio-provisioner           | minikube | disabled     |
| kubevirt                    | minikube | disabled     |
| logviewer                   | minikube | disabled     |
| metallb                     | minikube | disabled     |
| metrics-server              | minikube | disabled     |
| nvidia-driver-installer     | minikube | disabled     |
| nvidia-gpu-device-plugin    | minikube | disabled     |
| olm                         | minikube | disabled     |
| pod-security-policy         | minikube | disabled     |
| registry                    | minikube | disabled     |
| registry-aliases            | minikube | disabled     |
| registry-creds              | minikube | disabled     |
| storage-provisioner         | minikube | enabled ✅   |
| storage-provisioner-gluster | minikube | disabled     |
| volumesnapshots             | minikube | disabled     |
|-----------------------------|----------|--------------|

[junsulee@fedora kubernetes]$ minikube addons enable ingress
  - Using image k8s.gcr.io/ingress-nginx/controller:v0.44.0
  - Using image docker.io/jettech/kube-webhook-certgen:v1.5.1
  - Using image docker.io/jettech/kube-webhook-certgen:v1.5.1
* Verifying ingress addon...
* The 'ingress' addon is enabled

[junsulee@fedora kubernetes]$ minikube addons enable ingress-dns
  - Using image cryptexlabs/minikube-ingress-dns:0.3.0
* The 'ingress-dns' addon is enabled
[junsulee@fedora kubernetes]$ minikube addons list
|-----------------------------|----------|--------------|
|         ADDON NAME          | PROFILE  |    STATUS    |
|-----------------------------|----------|--------------|
| ambassador                  | minikube | disabled     |
| auto-pause                  | minikube | disabled     |
| csi-hostpath-driver         | minikube | disabled     |
| dashboard                   | minikube | enabled ✅   |
| default-storageclass        | minikube | enabled ✅   |
| efk                         | minikube | disabled     |
| freshpod                    | minikube | disabled     |
| gcp-auth                    | minikube | disabled     |
| gvisor                      | minikube | disabled     |
| helm-tiller                 | minikube | disabled     |
| ingress                     | minikube | enabled ✅   |
| ingress-dns                 | minikube | enabled ✅   |
| istio                       | minikube | disabled     |
| istio-provisioner           | minikube | disabled     |
| kubevirt                    | minikube | disabled     |
| logviewer                   | minikube | disabled     |
| metallb                     | minikube | disabled     |
| metrics-server              | minikube | disabled     |
| nvidia-driver-installer     | minikube | disabled     |
| nvidia-gpu-device-plugin    | minikube | disabled     |
| olm                         | minikube | disabled     |
| pod-security-policy         | minikube | disabled     |
| registry                    | minikube | disabled     |
| registry-aliases            | minikube | disabled     |
| registry-creds              | minikube | disabled     |
| storage-provisioner         | minikube | enabled ✅   |
| storage-provisioner-gluster | minikube | disabled     |
| volumesnapshots             | minikube | disabled     |
|-----------------------------|----------|--------------|

```

Create ingress controller.     
```
$ cat nginx-in2.yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:     ## comment filed 
    ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host:
    http:
      paths:
      - path: /nginxserver
        backend:
          serviceName: nginx-dash
          servicePort: 80

[junsulee@fedora kubernetes]$ kubectl create -f nginx-in2.yaml
Warning: extensions/v1beta1 Ingress is deprecated in v1.14+, unavailable in v1.22+; use networking.k8s.io/v1 Ingress
ingress.extensions/nginx-ingress created
```

Normal Ingress example.  

```
$ cat ingress-virtual-hosting.yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: name-virtual-host-ingress
spec:
  rules:
  - host: first.bar.com     ## <=== DNS should know about this     
    http:
      paths:
      - backend:
          serviceName: service1
          servicePort: 80
  - host: second.foo.com
    http:
      paths:
      - backend:
          serviceName: service2
          servicePort: 80
  - http:
      paths:
      - backend: 
          serviceName: service3
          servicePort: 80
```

#### Lab 6 Exposing Pods     

Create a pod.   
```
$ cat lab6_nginx_pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: lab6-nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx
[junsulee@fedora kubernetes]$ kubectl create -f lab6_nginx_pod.yaml
pod/lab6-nginx-pod created

$ kubectl get pods -o wide
NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE       NOMINATED NODE   READINESS GATES
busybox                         1/1     Running   6          6h5m    172.17.0.9    minikube   <none>           <none>
cmd-nginx-57bb5f6747-hznc7      1/1     Running   1          7d1h    172.17.0.5    minikube   <none>           <none>
cmd-nginx-57bb5f6747-kmkjr      1/1     Running   1          7d      172.17.0.3    minikube   <none>           <none>
lab5-nginx-7777d7964c-rkfz2     1/1     Running   0          26h     172.17.0.14   minikube   <none>           <none>
lab5-nginx-7777d7964c-v9kn6     1/1     Running   0          26h     172.17.0.15   minikube   <none>           <none>
lab6-nginx-pod                  1/1     Running   0          3m27s   172.17.0.13   minikube   <none>           <none>     <========
redis-6fb5b985bc-s6gpq          1/1     Running   0          6d9h    172.17.0.8    minikube   <none>           <none>
rollingnginx-7dbfcbddb7-rb5wk   1/1     Running   0          23h     172.17.0.12   minikube   <none>           <none>
verybusy                        2/2     Running   50         25h     172.17.0.10   minikube   <none>           <none>
[junsulee@fedora kubernetes]$ 

```

expose failure due to no label on the pod. 

```
$ kubectl expose pod lab6-nginx-pod --type=NodePort
error: couldn't retrieve selectors via --selector flag or introspection: the pod has no labels and cannot be exposed
See 'kubectl expose -h' for help and examples
```

Create again adding labels   

```
$ cat lab6_nginx_pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: lab6-nginx-pod
  labels:     ## added
    name: lab6-nginx-pod   ## added
spec:
  containers:
  - name: nginx
    image: nginx

$ kubectl create -f lab6_nginx_pod.yaml
pod/lab6-nginx-pod created

[junsulee@fedora kubernetes]$ kubectl get pods -o wide
NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE       NOMINATED NODE   READINESS GATES
...
lab6-nginx-pod                  1/1     Running   0          29s     172.17.0.13   minikube   <none>           <none>
...

$ kubectl get pods --show-labels
NAME                            READY   STATUS    RESTARTS   AGE     LABELS
...
lab6-nginx-pod                  1/1     Running   0          2m9s    name=lab6-nginx-pod    <======================
...
``` 

Expose again    

```
$ kubectl expose pod lab6-nginx-pod --type=NodePort --port=8080
service/lab6-nginx-pod exposed

[junsulee@fedora kubernetes]$ kubectl describe service lab6-nginx-pod
Name:                     lab6-nginx-pod
Namespace:                default
Labels:                   name=lab6-nginx-pod
Annotations:              <none>
Selector:                 name=lab6-nginx-pod
Type:                     NodePort
IP Families:              <none>
IP:                       10.100.194.64   => (?) what's this IP ? CLUSTER-IP 
IPs:                      10.100.194.64
Port:                     <unset>  8080/TCP
TargetPort:               8080/TCP
NodePort:                 <unset>  30390/TCP
Endpoints:                172.17.0.13:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>


$ kubectl get svc
NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
...
lab6-nginx-pod   NodePort    10.100.194.64   <none>        8080:30390/TCP   6m7s
```


### 07 Managing Pod Volumes

#### Managing Pod Volumes    

Create a pod using `emptyDir` type volumne.    
That is temporary during pods's life time. See `kubectl explain pod.spec.volumes`.      

```yaml
$ cat volumes.yaml
apiVersion: v1
kind: Pod
metadata:
  name: vol2
spec:
  containers:
  - name: centos2
    image: centos:7
    command:
      - sleep
      - "3600"
    volumeMounts:
    - mountPath: /test
      name: test
  restartPolicy: Always
  volumes:
    - name: test
      emptyDir: {}
```
```
$ kubectl create -f volumes.yaml
pod/vol2 created

[junsulee@fedora kubernetes]$ kubectl get pod
NAME   READY   STATUS              RESTARTS   AGE
vol2   0/1     ContainerCreating   0          58s
[junsulee@fedora kubernetes]$ kubectl get pod
NAME   READY   STATUS              RESTARTS   AGE
vol2   0/1     ContainerCreating   0          67s
[junsulee@fedora kubernetes]$ kubectl get pod
NAME   READY   STATUS    RESTARTS   AGE
vol2   1/1     Running   0          2m16s
```

It created volume `test` with `emptyDir` type and mount it as `/test` new pod with `emptyDir` type.       
```
[junsulee@fedora kubernetes]$ kubectl describe pod vol2
Name:         vol2
Namespace:    default
Priority:     0
Node:         minikube/192.168.39.25
Start Time:   Sat, 08 Oct 2022 16:50:50 +1100
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           172.17.0.6
IPs:
  IP:  172.17.0.6
Containers:
  centos2:
    Container ID:  docker://1e6aba5fa4cf0a6f1f1f05a613b7ca98d548e37d106c01b13ac613c45d20da24
    Image:         centos:7
    Image ID:      docker-pullable://centos@sha256:c73f515d06b0fa07bb18d8202035e739a494ce760aa73129f60f4bf2bd22b407
    Port:          <none>
    Host Port:     <none>
    Command:
      sleep
      3600
    State:          Running
      Started:      Sat, 08 Oct 2022 16:52:04 +1100
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /test from test (rw)     <=====
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-hfn84 (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             True 
  ContainersReady   True 
  PodScheduled      True 
Volumes:
  test:
    Type:       EmptyDir (a temporary directory that shares a pod's lifetime)         <=======
    Medium:     
    SizeLimit:  <unset>
  default-token-hfn84:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-hfn84
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  2m51s  default-scheduler  Successfully assigned default/vol2 to minikube
  Normal  Pulling    2m43s  kubelet            Pulling image "centos:7"
  Normal  Pulled     103s   kubelet            Successfully pulled image "centos:7" in 1m0.434691784s
  Normal  Created    99s    kubelet            Created container centos2
  Normal  Started    97s    kubelet            Started container centos2
```

Create a test file into the pod.   

```
$ kubectl exec -it vol2 touch /test/testfile
kubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.
$ kubectl exec -it vol2 -- ls -l /test/testfile
-rw-r--r-- 1 root root 0 Oct  8 05:56 /test/testfile

$ kubectl exec -it vol2 -- df -h
Filesystem      Size  Used Avail Use% Mounted on
overlay          17G  3.1G   13G  20% /
tmpfs            64M     0   64M   0% /dev
tmpfs           2.0G     0  2.0G   0% /sys/fs/cgroup
/dev/vda1        17G  3.1G   13G  20% /test       <=======
shm              64M     0   64M   0% /dev/shm
tmpfs           2.0G   12K  2.0G   1% /run/secrets/kubernetes.io/serviceaccount
tmpfs           2.0G     0  2.0G   0% /proc/acpi
tmpfs           2.0G     0  2.0G   0% /proc/scsi
tmpfs           2.0G     0  2.0G   0% /sys/firmware
```

Another example sharing a volume between containers.     

```yaml
$ cat morevolumes2.yaml
apiVersion: v1
kind: Pod
metadata: 
  name: morevol2
spec:
  containers:
  - name: centos1
    image: centos:7
    command:
      - sleep
      - "3600" 
    volumeMounts:
      - mountPath: /centos
        name: test
  - name: centos2
    image: centos:7
    command:
      - sleep
      - "3600"
    volumeMounts:
      - mountPath: /centos2
        name: test
  volumes: 
    - name: test
      emptyDir: {}


$ kubectl create -f morevolumes2.yaml
pod/morevol2 created

$ kubectl exec -it morevol2 -c centos1 -- touch /centos/testfile
$ kubectl exec -it morevol2 -c centos2 -- ls -l /centos2
total 0
-rw-r--r-- 1 root root 0 Oct  8 06:11 testfile
```

#### Using persistent volumes

- Pod volumes depend on Pods
- To have storage outlast a pod, the volume should connect to external storage    
- This can be done from within the pod, but that would require the developer to know about storage specifics
- To decouple storage requirements from Pod deployment, Persistent Volumes are offered.   
- `PVC(PersistentVolumeClain)` is used by the user to claim storage in a declaritive way, without worrying about storage specifics.     
- PVC is a k8s API object that has a spec that defines required storage properties.     
- Based on properties, PVC will reach out to a PV to bind to specific storage     

- PV is independent to pod.   <===>  PVC <===> Pod (has PVC to access to PV)    
- PV and PVC has no direct relation.  Those are bound dynamically when necessary.           

#### Setting up Pods to use PVs    

Create a path to user in k8s host.    
```
[junsulee@fedora kubernetes]$ minikube ssh
                         _             _
            _         _ ( )           ( )
  ___ ___  (_)  ___  (_)| |/')  _   _ | |_      __
/' _ ` _ `\| |/' _ `\| || , <  ( ) ( )| '_`\  /'__`\
| ( ) ( ) || || ( ) || || |\`\ | (_) || |_) )(  ___/
(_) (_) (_)(_)(_) (_)(_)(_) (_)`\___/'(_,__/'`\____)

$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           3.5G  679M  2.8G  20% /
devtmpfs        1.9G     0  1.9G   0% /dev
tmpfs           2.0G     0  2.0G   0% /dev/shm
tmpfs           2.0G   10M  2.0G   1% /run
tmpfs           2.0G     0  2.0G   0% /sys/fs/cgroup
tmpfs           2.0G  8.0K  2.0G   1% /tmp
/dev/vda1        17G  3.0G   13G  19% /mnt/vda1
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/3804902e40974da784873de8cc87f9663936835fd66342e7d478acb258b57ab5/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/a9d3476fcbcadcf74f5fe1357fe7d650125359ccd051ec10dcfaa7271cd3c91e/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/218a54e89da72c4cd542ff0642d2925ce9588eddb66539ca7b64d96c6541a527/merged
shm              64M     0   64M   0% /var/lib/docker/containers/11bca17f331e7eac01f2688d539ab7bde4dd2ea1837a581b7a3c96608814a23d/mounts/shm
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/9319c2770817c906dc6c34abcf70cf23a942de54d92496207b9f0e7cbecff392/merged
shm              64M     0   64M   0% /var/lib/docker/containers/bf7004c93c9e9004f814c8861136e3d45356aa7e5444aa567533d1ce8ce3b494/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/67274633884f3a7147b4d28902458934c79be094de9aaea988dca4d9bd455265/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/2cd313fc6db7274f3655b2a9ecb13e9ee6e9e3ed109d0297c8f8dcc572db9c7d/mounts/shm
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/012b4b7b290bada7137b958631b82b3b363aedddf9d166acf7b8564f3e1f2980/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/68a47b0ea0762377dd7041d333a3fd24fd8b69d9905f58369d16af4fa834d822/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/a296b3f42291056f21dd01324318b6e0ea977ad642104b0d21c12a3bd98fac24/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/afbbc4dc554f04b2c397cdaa234eaa77e5ffe7d1a8137bec1e0c1e589016c3a5/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/530e131a26910f86adde91225019a65769fa5f65851655bfadafe9ab75e2b165/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/d7c775c6eeb2c235b4ec0e398ce88c7f99792e7e5b5ac19dd9c05d50f6ca6661/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/95a6e5438ccebe4a9c70b7a50e000d3d7fe4ba6542a0a2399d77e767320586e5/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/aae81a3b3a0aed9abd14b7beb324ad88370f8b18aed2f7b354687a0d308a1913/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/18766dfec9ef14802cad3dbda57e88265247e7e2f90ed05751a4bdbe2f053ba8/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/1237087f2076189f2dc657de8a33525e96c570d04a2b2cb0b9fcd15ba7941542/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/5a41bfe3d52ef14b86163ead4da4ea57e98d47c1c76c8dcb90f8344e3e59fd05/merged
shm              64M     0   64M   0% /var/lib/docker/containers/6e0e72b562ce43064e1af0dab240b768e2f43adf1f56795ed8b6bc08ac246778/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/56a46268fffea50b0a95fd6d444a38423fc6ce98b466fada4cf38dd4621f956b/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/10171e7249f1fae755595aceed007b88ded4ecb0469954b098473f28f0b776b0/mounts/shm
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/a78e8fb8cd113c658c91f3d23d573c16d35a167cf1374864f080952ffb404c42/merged
shm              64M     0   64M   0% /var/lib/docker/containers/58b20b522446c622e78ec329671216e6356c5036bf540548338453444b1e2e55/mounts/shm
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/f8c0f947209c52ee12bcbd366841af3a4a2163bf85905e124a8ed5e0ca09bf5c/merged
shm              64M     0   64M   0% /var/lib/docker/containers/61286fe3865cff187090c9d74943bf56e42893a999a24afec52e969b845a914e/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/62924c3743876e98a57b6062d2d00b73143368cdb48e7c892243eaffca2abb92/mounts/shm
shm              64M     0   64M   0% /var/lib/docker/containers/75bab8180811c4a5a52ca65afba3c12b9f45f9716c1851acb2baba7b987de04c/mounts/shm
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/c41c288dc1cf61e622d42c60c7f4cffc936eafaeaf39b8095579ffbb27582560/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/03b099b772e9a08a19ac1cf19a919d7e428ed12737b011f4c28fe56fdcfe4dfb/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/2f80e54cd2fe733cf310e7a74be04b8fa5081d1508812c16943e8077460f1a77/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/1f2f9062c9e540c0d23f16cb6a85aaf8595e2b86f8aed0166f2a2096db7fde47/merged
overlay          17G  3.0G   13G  19% /var/lib/docker/overlay2/ac2edc3273ed3c914b6e6a20328b19e521773564b896f096906b14368ee07eb0/merged
$ sudo mkdir /mydata
$ exit
logout

```

Create a PV   
```yaml
[junsulee@fedora kubernetes]$ cat pv.yaml
kind: PersistentVolume
apiVersion: v1
metadata:
  name: pv-volume
  labels:
      type: local
spec:
  capacity:
    storage: 2Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mydata"
[junsulee@fedora kubernetes]$ kubectl create -f pv.yaml
persistentvolume/pv-volume created

$ kubectl get pv
NAME        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
pv-volume   2Gi        RWO            Retain           Available                                   103s
```

Create a PVC.    
**It is going to look for any PV with the same accessMode** , here `ReadWriteOnce` and bind.    

```yaml
[junsulee@fedora kubernetes]$ cat pvc.yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: pv-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi

[junsulee@fedora kubernetes]$ kubectl create -f pvc.yaml
persistentvolumeclaim/pv-claim created
```

PVC is bound to a volume name `pvc-xxx` and that is added checking with `kubectl get pv`.     

```
[junsulee@fedora kubernetes]$ kubectl get pvc
NAME       STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
pv-claim   Bound    pvc-d54a5923-e241-43cc-b224-b7725d3b8c01   1Gi        RWO            standard       113s
[junsulee@fedora kubernetes]$ kubectl get pv
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM              STORAGECLASS   REASON   AGE
pv-volume                                  2Gi        RWO            Retain           Available                                              6m57s
pvc-d54a5923-e241-43cc-b224-b7725d3b8c01   1Gi        RWO            Delete           Bound       default/pv-claim   standard                115s
```

After the pod creation using the pvc, the mount is available.      
 
```yaml
[junsulee@fedora kubernetes]$ cat pv-pod.yaml
kind: Pod
apiVersion: v1
metadata:
   name: pv-pod
spec:
  volumes:
    - name: pv-storage
      persistentVolumeClaim:
        claimName: pv-claim
  containers:
    - name: pv-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: pv-storage
[junsulee@fedora kubernetes]$
[junsulee@fedora kubernetes]$ kubectl create -f pv-pod.yaml
pod/pv-pod created

[junsulee@fedora kubernetes]$ kubectl get pod
NAME     READY   STATUS    RESTARTS   AGE
pv-pod   1/1     Running   0          102s

[junsulee@fedora kubernetes]$ kubectl describe pod pv-pod
Name:         pv-pod
Namespace:    default
Priority:     0
Node:         minikube/192.168.39.25
Start Time:   Sat, 22 Oct 2022 14:03:52 +1100
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           172.17.0.6
IPs:
  IP:  172.17.0.6
Containers:
  pv-container:
    Container ID:   docker://08efa2953f164c4a2271b52f8c7331fff37cf4aac6690ccd8ff3467908e159de
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:5ffb682b98b0362b66754387e86b0cd31a5cb7123e49e7f6f6617690900d20b2
    Port:           80/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sat, 22 Oct 2022 14:05:10 +1100
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /usr/share/nginx/html from pv-storage (rw)      <=========
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-d6tbm (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  pv-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)     <=====
    ClaimName:  pv-claim   <========
    ReadOnly:   false
  default-token-d6tbm:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-d6tbm
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  115s  default-scheduler  Successfully assigned default/pv-pod to minikube
  Normal  Pulling    103s  kubelet            Pulling image "nginx"
  Normal  Pulled     59s   kubelet            Successfully pulled image "nginx" in 44.215800653s
  Normal  Created    41s   kubelet            Created container pv-container
  Normal  Started    35s   kubelet            Started container pv-container
``` 

Above example is not realistic as we don't put a storage to a specific host only.    
Here are example using a NFS mount path.    

```yaml
[junsulee@fedora kubernetes]$ cat nfs-pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv
spec:
  capacity:
    storage: 2Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /data
    server: 192.168.99.1
    readOnly: false

[junsulee@fedora kubernetes]$ cat nfs-pvc.yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: nfs-pv-claim
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Mi

[junsulee@fedora kubernetes]$ cat nfs-pv-pod.yaml
kind: Pod
apiVersion: v1
metadata:
   name: nfs-pv-pod
spec:
  volumes:
    - name: nfs-pv
      persistentVolumeClaim:
        claimName: nfs-pv-claim
  containers:
    - name: nfs-client1
      image: centos:latest
      command:
        - sleep
        - "3600"
      volumeMounts:
        - mountPath: "/nfsshare"
          name: nfs-pv
    - name: nfs-client2
      image: centos:latest
      command:
        - sleep
        - "3600"
      volumeMounts:
        - mountPath: "/nfsshare"
          name: nfs-pv
```

#### Dynamic provisioning

- PVs can be created manually or dynamically provisioned.   
- To dynamically provision a PV, a StrageClass must be referred to in the PVC     
- Storage classes are using classes that are defined by the administrator    
- Storage classes are also using provisioners that connect to a specific storage type    
- A default storage class can be used, alternatively storage classes can be defined manually       
- A default StorageClass can be used to always specify a storage type so that it doesn't have to be defined in the PVC spec anymore.   
- You'll find Default StorageClasses in specific Managed K8s environment, such as AKS.         
- Custom StorageClass is used to define a StorageClass resource that binds to specific storage.     

#### Using ConfigMaps   

- Separate configuration from code
- ConfigMaps are clear-text, Secrets are base64 encoded
- Different types can be used : Files, Directories, Literals  
- No matter which type is used, all the associated data is stored in the ConfigMap or Secret object
- Secrets are mainly used to push variables.    

Create a ConfigMap.   
```yaml
[junsulee@fedora kubernetes]$ cat nginx-custom-config.conf
server {
    listen       8888;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
[junsulee@fedora kubernetes]$ kubectl create cm nginx-cm --from-file nginx-custom-config.conf
configmap/nginx-cm created
```

In `data` section, the content is available.    
```yaml
[junsulee@fedora kubernetes]$ kubectl get cm nginx-cm -o yaml
apiVersion: v1
data:
  nginx-custom-config.conf: |
    server {
        listen       8888;
        server_name  localhost;
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }
kind: ConfigMap
metadata:
  creationTimestamp: "2022-10-22T03:41:32Z"
  name: nginx-cm
  namespace: default
  resourceVersion: "62148"
  uid: fba3b2f1-b659-4284-bc2a-0ddad88e2fc2

```

Create a pod using the ConfigMap.   
It is mounted as volumes.     
It mounts the path `/etc/nginx/conf.d` with `conf` volume and create `default.conf` file under the path using the content of the ConfigMap `nginx-custom-config.conf`.     
```yaml
[junsulee@fedora kubernetes]$ cat nginx-cm.yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-cm
  labels:
    role: web
spec:
  containers:
  - name: nginx-cm
    image: nginx
    volumeMounts:
    - name: conf
      mountPath: /etc/nginx/conf.d
  volumes:
  - name: conf
    configMap:
      name: nginx-cm
      items:
      - key: nginx-custom-config.conf
        path: default.conf
```

```
[junsulee@fedora kubernetes]$ kubectl create -f nginx-cm.yml
pod/nginx-cm created

[junsulee@fedora kubernetes]$ kubectl exec -it nginx-cm -- cat /etc/nginx/conf.d/default.conf
server {
    listen       8888;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
```


#### Using Secret    
- K8s automatically creates Secrets that contains credentials for accessing the API, and automatically modifies the Pods to use this type of Secret   
- `kubectl describe pod <podname>` and look for the mount section to see them.   
- While creating a secret, the next value must be base64 encoded
- You can create a secret. When using `kubectl create secret` this is happening automatically.      

- From Pods, Secrets are used in the way that ConfigMaps are used.   
- Mounted as volumes  
- Imported as variables.    

Create a secret.    
```
$ kubectl create secret generic secretstuff --from-literal=password=password --from-literal=user=linda
secret/secretstuff created
```

The information is encoded.    
```
[junsulee@fedora kubernetes]$ kubectl get secret secretstuff
NAME          TYPE     DATA   AGE
secretstuff   Opaque   2      11m
[junsulee@fedora kubernetes]$ kubectl get secret secretstuff -o yaml
apiVersion: v1
data:
  password: cGFzc3dvcmQ=
  user: bGluZGE=
kind: Secret
metadata:
  creationTimestamp: "2022-10-22T04:20:07Z"
  name: secretstuff
  namespace: default
  resourceVersion: "64064"
  uid: e88c872d-f0c4-4768-9155-f654b9c5b6dd
type: Opaque
```

Create a pod using the secret.   

```yaml
[junsulee@fedora kubernetes]$ cat pod-secret.yaml
apiVersion: v1
kind: Pod
metadata:
  name: secretbox2
  namespace: default
spec:
  containers:
  - name: secretbox
    image: busybox
    command:
      - sleep
      - "3600"
    volumeMounts:
    - mountPath: /secretstuff
      name: secret
  volumes:
  - name: secret
    secret:
      secretName: secretstuff


[junsulee@fedora kubernetes]$ kubectl create -f pod-secret.yaml
pod/secretbox2 created

junsulee@fedora kubernetes]$ kubectl describe pod secretbox2
Name:         secretbox2
Namespace:    default
Priority:     0
Node:         minikube/192.168.39.25
Start Time:   Sat, 22 Oct 2022 15:39:39 +1100
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           172.17.0.8
IPs:
  IP:  172.17.0.8
Containers:
  secretbox:
    Container ID:  docker://0151e632b9a8a44e002ee5757a8dbfd7ecd46b32b96b702c9ff92fbd4a23a158
    Image:         busybox
    Image ID:      docker-pullable://busybox@sha256:9810966b5f712084ea05bf28fc8ba2c8fb110baa2531a10e2da52c1efc504698
    Port:          <none>
    Host Port:     <none>
    Command:
      sleep
      3600
    State:          Running
      Started:      Sat, 22 Oct 2022 15:40:14 +1100
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /secretstuff from secret (rw)       <=====
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-d6tbm (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  secret:
    Type:        Secret (a volume populated by a Secret)    <=====
    SecretName:  secretstuff
    Optional:    false
  default-token-d6tbm:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-d6tbm
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  2m1s  default-scheduler  Successfully assigned default/secretbox2 to minikube
  Normal  Pulling    109s  kubelet            Pulling image "busybox"
  Normal  Pulled     95s   kubelet            Successfully pulled image "busybox" in 13.683200681s
  Normal  Created    89s   kubelet            Created container secretbox
  Normal  Started    86s   kubelet            Started container secretbox


[junsulee@fedora kubernetes]$ kubectl get pod secretbox2 -o yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2022-10-22T04:39:39Z"
  name: secretbox2
  namespace: default
  resourceVersion: "65060"
  uid: 23afef33-efab-450a-ab2a-6824672106b0
spec:
  containers:
  - command:
    - sleep
    - "3600"
    image: busybox
    imagePullPolicy: Always
    name: secretbox
    resources: {}
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /secretstuff      <=====
      name: secret
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: default-token-d6tbm
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  nodeName: minikube
  preemptionPolicy: PreemptLowerPriority
  priority: 0
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  volumes:
  - name: secret      <======
    secret:
      defaultMode: 420
      secretName: secretstuff
  - name: default-token-d6tbm
    secret:
      defaultMode: 420
      secretName: default-token-d6tbm
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T04:39:39Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T04:40:14Z"
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T04:40:14Z"
    status: "True"
    type: ContainersReady
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T04:39:39Z"
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://0151e632b9a8a44e002ee5757a8dbfd7ecd46b32b96b702c9ff92fbd4a23a158
    image: busybox:latest
    imageID: docker-pullable://busybox@sha256:9810966b5f712084ea05bf28fc8ba2c8fb110baa2531a10e2da52c1efc504698
    lastState: {}
    name: secretbox
    ready: true
    restartCount: 0
    started: true
    state:
      running:
        startedAt: "2022-10-22T04:40:14Z"
  hostIP: 192.168.39.25
  phase: Running
  podIP: 172.17.0.8
  podIPs:
  - ip: 172.17.0.8
  qosClass: BestEffort
  startTime: "2022-10-22T04:39:39Z"
```

Check the file inside of the pod.    
Once deployed, the value is shown as plain text.     

```
[junsulee@fedora kubernetes]$ kubectl exec -it secretbox2 -- /bin/sh
/ # cat /secretstuff/password
password/ #
/ # cat /secretstuff/user
linda/ #
```

**Another example using environment variable**  

```yaml

[junsulee@fedora kubernetes]$ kubectl create secret generic mysql --from-literal=password=root
secret/mysql created
[junsulee@fedora kubernetes]$ kubectl get secrets mysql -o yaml
apiVersion: v1
data:
  password: cm9vdA==
kind: Secret
metadata:
  creationTimestamp: "2022-10-22T05:33:48Z"
  name: mysql
  namespace: default
  resourceVersion: "67694"
  uid: 85635175-793d-43d6-8f98-d228a5ec4d4d
type: Opaque
[junsulee@fedora kubernetes]$ kubectl explain pod.spec.containers.env.valueFrom
KIND:     Pod
VERSION:  v1

RESOURCE: valueFrom <Object>

DESCRIPTION:
     Source for the environment variable's value. Cannot be used if value is not
     empty.

     EnvVarSource represents a source for the value of an EnvVar.

FIELDS:
   configMapKeyRef	<Object>
     Selects a key of a ConfigMap.

   fieldRef	<Object>
     Selects a field of the pod: supports metadata.name, metadata.namespace,
     `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName,
     spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.

   resourceFieldRef	<Object>
     Selects a resource of the container: only resources limits and requests
     (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu,
     requests.memory and requests.ephemeral-storage) are currently supported.

   secretKeyRef	<Object>
     Selects a key of a secret in the pod's namespace

[junsulee@fedora kubernetes]$ cat pod-secret-as-var.yaml
apiVersion: v1
kind: Pod
metadata:
  name: mymysql
  namespace: default
spec:
  containers:
  - name: mysql
    image: mysql:latest
    env:
    - name: MYSQL_ROOT_PASSWORD
      valueFrom:
        secretKeyRef:
          name: mysql
          key: password


[junsulee@fedora kubernetes]$ kubectl create -f pod-secret-as-var.yaml
pod/mymysql created
[junsulee@fedora kubernetes]$ kubectl describe pod mymysql
Name:         mymysql
Namespace:    default
Priority:     0
Node:         minikube/192.168.39.25
Start Time:   Sat, 22 Oct 2022 16:37:21 +1100
Labels:       <none>
Annotations:  <none>
Status:       Pending
IP:
IPs:          <none>
Containers:
  mysql:
    Container ID:
    Image:          mysql:latest
    Image ID:
    Port:           <none>
    Host Port:      <none>
    State:          Waiting
      Reason:       ContainerCreating
    Ready:          False
    Restart Count:  0
    Environment:
      MYSQL_ROOT_PASSWORD:  <set to the key 'password' in secret 'mysql'>  Optional: false
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-d6tbm (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             False
  ContainersReady   False
  PodScheduled      True
Volumes:
  default-token-d6tbm:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-d6tbm
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  90s   default-scheduler  Successfully assigned default/mymysql to minikube
  Normal  Pulling    76s   kubelet            Pulling image "mysql:latest"
[junsulee@fedora kubernetes]$
[junsulee@fedora kubernetes]$ kubectl get pod mymysql -o yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2022-10-22T05:37:21Z"
  name: mymysql
  namespace: default
  resourceVersion: "67874"
  uid: ea09c906-4347-4eb7-a617-837c34ffb530
spec:
  containers:
  - env:
    - name: MYSQL_ROOT_PASSWORD
      valueFrom:
        secretKeyRef:
          key: password
          name: mysql
    image: mysql:latest
    imagePullPolicy: Always
    name: mysql
    resources: {}
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: default-token-d6tbm
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  nodeName: minikube
  preemptionPolicy: PreemptLowerPriority
  priority: 0
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  volumes:
  - name: default-token-d6tbm
    secret:
      defaultMode: 420
      secretName: default-token-d6tbm
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T05:37:21Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T05:37:21Z"
    message: 'containers with unready status: [mysql]'
    reason: ContainersNotReady
    status: "False"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T05:37:21Z"
    message: 'containers with unready status: [mysql]'
    reason: ContainersNotReady
    status: "False"
    type: ContainersReady
  - lastProbeTime: null
    lastTransitionTime: "2022-10-22T05:37:21Z"
    status: "True"
    type: PodScheduled
  containerStatuses:
  - image: mysql:latest
    imageID: ""
    lastState: {}
    name: mysql
    ready: false
    restartCount: 0
    started: false
    state:
      waiting:
        reason: ContainerCreating
  hostIP: 192.168.39.25
  phase: Pending
  qosClass: BestEffort
  startTime: "2022-10-22T05:37:21Z"
```

Environment variable is set in the pod.    

```
[junsulee@fedora kubernetes]$ kubectl exec -it mymysql -- /bin/bash
bash-4.4# env |grep MYSQL_ROOT_PASSWORD
MYSQL_ROOT_PASSWORD=root
```


