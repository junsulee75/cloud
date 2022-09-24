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

[junsulee@fedora ~]$ kubectl get all -A
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

## Reference

[Oreilly kubernetes education github repository](https://github.com/sandervanvugt/kubernetes)

[KVM Virtualization on VMware 12](
https://borysneselovskyi.wordpress.com/2018/02/19/kvm-virtualization-on-top-of-the-vmware-workstation-12-guest-vms/)



## Lab
### 02 Operating containers    

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

### 04 Running an Application 

#### Deleting pod/deployment    
To start from scratch, check existing deployment/pod, then delete.        

```
[junsulee@fedora ~]$ kubectl get deployment
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           32d

[junsulee@fedora ~]$ kubectl get pod
NAME                         READY   STATUS    RESTARTS   AGE
cmd-nginx-57bb5f6747-tv4sb   1/1     Running   0          31s
```

At this time, the pod runs again with different name because of deployment.   
to clear, need to delete deployment together.   

```
[junsulee@fedora ~]$ kubectl delete deployment cmd-nginx
deployment.apps "cmd-nginx" deleted

[junsulee@fedora ~]$ kubectl get deployment
No resources found in default namespace.

[junsulee@fedora ~]$ kubectl get pod
NAME                         READY   STATUS        RESTARTS   AGE
cmd-nginx-57bb5f6747-tv4sb   0/1     Terminating   0          6m58s
[junsulee@fedora ~]$ kubectl delete pod cmd-nginx-57bb5f6747-tv4sb
pod "cmd-nginx-57bb5f6747-tv4sb" deleted
[junsulee@fedora ~]$ kubectl get pod
No resources found in default namespace.
```

#### pod without a default command


Creating a pod that does not have a default command becomes abnormal status.   
```
[junsulee@fedora kube]$ kubectl create deployment my-dep --image=busybox
deployment.apps/my-dep created
[junsulee@fedora kube]$ kubectl get pod
NAME                      READY   STATUS              RESTARTS   AGE
my-dep-68d7dcffc4-fvzsp   0/1     ContainerCreating   0          10s
[junsulee@fedora kube]$ date;kubectl get pod
Sat 17 Sep 2022 13:18:40 AEST
NAME                      READY   STATUS      RESTARTS   AGE
my-dep-68d7dcffc4-fvzsp   0/1     Completed   0          22s
```

```
[junsulee@fedora kube]$ date;kubectl get pod
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
[junsulee@fedora kube]$ cat busybox.yaml
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

[junsulee@fedora kube]$ kubectl create -f busybox.yaml
pod/busybox2 created

[junsulee@fedora kube]$ kubectl get all
NAME           READY   STATUS    RESTARTS   AGE
pod/busybox2   1/1     Running   0          22s

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   118d

[junsulee@fedora kube]$ kubectl delete -f busybox.yaml
pod "busybox2" deleted
```

#### Lab 4. Running an Application in Kubernetes

create an example pod again 
```
[junsulee@fedora ~]$ kubectl create deployment cmd-nginx --image=nginx
deployment.apps/cmd-nginx created
[junsulee@fedora ~]$ kubectl get deployment
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   0/1     1            0           8s
[junsulee@fedora ~]$ kubectl get pod
NAME                         READY   STATUS    RESTARTS   AGE
cmd-nginx-57bb5f6747-bgqz4   1/1     Running   0          15s

[junsulee@fedora work]$ kubectl get deployment.apps
NAME        READY   UP-TO-DATE   AVAILABLE   AGE
cmd-nginx   1/1     1            1           18h

```

Create yaml referring existing apps.

```
[junsulee@fedora work]$ kubectl get deployment.apps -o yaml > myngnix.yaml

[junsulee@fedora work]$ cat myngnix.yaml
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
[junsulee@fedora work]$ cp myngnix.yaml myngnix_org.yaml

[junsulee@fedora work]$ cat myngnix.yaml
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
[junsulee@fedora work]$
[junsulee@fedora work]$ diff myngnix_org.yaml myngnix.yaml
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
[junsulee@fedora work]$ kubectl get all --show-labels
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
[junsulee@fedora work]$ kubectl label pods cmd-nginx-57bb5f6747-bgqz4 app-
pod/cmd-nginx-57bb5f6747-bgqz4 labeled
[junsulee@fedora work]$ kubectl get all --show-labels
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
[junsulee@fedora work]$ kubectl get all --selector app=cmd-nginx
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
[junsulee@fedora kubernetes]$ cat redis-deploy.yaml
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


[junsulee@fedora kubernetes]$ kubectl rollout history deployment rollingnginx --revision=1
deployment.apps/rollingnginx with revision #1
Pod Template:
  Labels:	app=rollingnginx
	pod-template-hash=785db9758d
  Containers:
   nginx:
    Image:	nginx:1.8
    Port:	<none>
    Host Port:	<none>
    Environment:	<none>
    Mounts:	<none>
  Volumes:	<none>

[junsulee@fedora kubernetes]$ kubectl rollout history deployment rollingnginx --revision=2
deployment.apps/rollingnginx with revision #2
Pod Template:
  Labels:	app=rollingnginx
	pod-template-hash=58cff98f76
  Containers:
   nginx:
    Image:	nginx:1.15
    Port:	<none>
    Host Port:	<none>
    Environment:	<none>
    Mounts:	<none>
  Volumes:	<none>
```

Two replica sets are shown. Old one will be gone eventually.   
```
[junsulee@fedora kubernetes]$ kubectl get all
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
replicaset.apps/rollingnginx-58cff98f76   1         1         1       6m17s    <===
replicaset.apps/rollingnginx-785db9758d   0         0         0       13m      
```

Rollback 
```
junsulee@fedora kubernetes]$ kubectl rollout undo deployment rollingnginx --to-revision=1
deployment.apps/rollingnginx rolled back

[junsulee@fedora kubernetes]$ kubectl get all
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
replicaset.apps/rollingnginx-785db9758d   1         1         1       16m   <====

```