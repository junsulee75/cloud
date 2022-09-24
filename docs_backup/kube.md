
# Kubenetes

Kubenetes (aka k8s)    

## Terms 

### Pods
- K8s is All about managing pods.   
- Pods in k8 can have one or more containers.     
  (Mostly one conatiner. A multi container is an exception.)   
- In a pod, you can have a volume as well so that files can be stored.    
- As Pods are not typically started by themselves as naked Pods, there are no good ways to start just a Pod from the command line.     
  (Do NOT run naked Pods !)
- However, Pods can be started from a YAML manifest, using `kubectl create -f mypod.yaml`. ( apiversion, kind, metadata, spec ... )     

### Replica/replica set 
- Replicated pods are taking care of redundancy.   
 
- Replica set for scailability.    
  Replica set also is not something you are going to manage.    
  Replica set is something that cares of the replication.   

### Deploymnet
- The deployment is really the applicaton.  
  Deployment is responsible for starting replicat set.   
  Deployment monitors replicat sets.   
  Replica set monitors right amount of pods.   
  If anything goes away, k8s restores sets.    
  Deployment knows how many replica should be available.     
  Deployments are the standard for running applications. In other words, running application in a Deployment is the standard.    

- K8s resources are stored in the `Etcd` database in JSON format.   

> Pods/volume -> replica -> replica set -> deployment    

- Deployment is responsible for starting the replicat set. 
  Replica set itself has started to pods.    

### namespace
- provide isolated environments in a k8s env.    
- Makes sens in env. with multiple teams or projects.    
- can use resource quota to divide cluster resources between users.   

### Context
- Consists of the clustername and namespace that the current user connects to.      

## Reference
[Kubernetes doc](https://kubernetes.io/docs/home/)
[crio](https://cri-o.io)

## Command Reference     

```
kubectl create deployment -h  # help

# completion setting
sudo yum install -y bash-completion
kubectl completion -h
source <(kubectl completion bash)
kubectl completion bash > ~/.kube/completion.bash.inc
## add the following line to .bash_profile
source .kube/completion.bash.inc

kubectl cluster-info

kubectl get all
kubectl get all -o wide


kubectl get nodes  

# pod
kubectl get pods   # shows currently running Pods
kubectl get pods <podname> -o yaml

kubectl describe pods
kubectl describe pod <podname>
ex) kubectl describe deployments.apps rollingnginx
kubectl delete pod busybox2

# deployment
kubectl create deployment cmd-nginx --image=nginx # Create. Can't set the # of replica set. To run an application from the command line.  Nicer way.       
# ngix : web serving, reverse proxying, caching, load balancing, media streaming, and more

kubectl create -f myfile.yaml   #  to run an application from a YAML file    
kubectl delete -f myfile.yaml

kubectl get <resources> -o yaml > myresource.yaml  #ex) kubectl get pod -o yaml
kubectl get deployment.apps
kubectl get deployment.apps -o yaml

# api
kubectl api-resources
ex) kubectl api-resources --api-group=db2u.databases.ibm.com 
kubectl api-versions    

# explain
kubectl explain pod
kubectl explain pod.spec
kubectl explain pod.spec.containers
ex) kubectl explain db2uclusters  
ex) kubectl explain db2uclusters.spec  
ex) kubectl explain db2uclusters.spec.environment   


# Namespace
kubectl get ns
ex) kubectl get all -n kubernetes-dashboard
kubectl create ns myspace  # create a namespace  
kubectl get pods --all-namespaces
kubectl get pods -A    # from all namespaces
ex) current namespace
[junsulee@fedora kube]$ kubectl config get-contexts
CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         minikube   minikube   minikube   default

ex) kubectl edit deployment cmd-nginx
ex) kubectl scale --replicas=1 cmd-nginx

# rollout
kubectl rollout history deployment
ex) kubectl rollout history deployment rollingnginx --revision=2
ex) kubectl rollout undo deployment rollingnginx --to-revision=1

# Labels 
kubectl get all --selector app=cmd-nginx    # Display all objects with a specific label

kubectl get all --show-lables
ex) kubectl get all --selector app=db2oltp-1655862364134421


```

## yaml examples    

### Simple

```yaml
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
```


