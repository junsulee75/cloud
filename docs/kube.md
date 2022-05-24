
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
    

# Reference
[Kubernetes doc](https://kubernetes.io/docs/home/)

# Command Reference     

```
kubectl get all
kubectl get all -o wide
kubectl get nodes
kubectl cluster-info

kubectl create deployment cmd-nginx --image=nginx # Create. Can't set the # of replica set
# ngix : web serving, reverse proxying, caching, load balancing, media streaming, and more
```


