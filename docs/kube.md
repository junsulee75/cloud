
# Kubenetes

- All about managing pods.   
- Pods can have one or more containers.     
  (Mostly one conatiner. A multi container is an exception.)   
- In a pod, you can have a volume as well so that files can be stored.   
- Replicated pods are taking care of redundancy.   
- Replica set for scailability.    
- The resource that is all about is the `deployment`.    
  The deployment is really is the applicaton.  
  Deployment is responsible for starting   

> Pods/volume -> replica -> replica set -> deployment    

- Deployment is responsible for starting the replicat set. 
  Replica set itself has started to pods.    
    

## Reference
[Kubernetes doc](https://kubernetes.io/docs/home/)

## Command Reference     

```
kubectl create deployment -h  # help

# completion setting
sudo yum install -y bash-completion
kubectl completion -h
kubectl completion bash > ~/.kube/completion.bash.inc
## add the following line to .bash_profile
source .kube/completion.bash.inc


kubectl get all
kubectl get all -o wide
kubectl get nodes
kubectl get pods
kubectl cluster-info

kubectl create deployment cmd-nginx --image=nginx # Create. Can't set the # of replica set
# ngix : web serving, reverse proxying, caching, load balancing, media streaming, and more

kubectl create -f myfile.yaml
kubectl delete -f myfile.yaml
kubectl get <resources> -o yaml > myresource.yaml  #ex) kubectl get pod -o yaml

kubectl delete pod busybox2
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


