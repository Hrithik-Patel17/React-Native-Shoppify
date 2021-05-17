import React, { useState, useEffect } from "react"
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native"
import { Item, Picker } from "native-base"
import FormContainer from "../../components/Form/FormContainer"
import Input from "../../components/Form/Input"
import EasyButton from "../../components/StyledComponent/EasyButton"
import Error from "../../components/Error";
import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-async-storage/async-storage"
import baseURL from "../../assets/common/baseUrl"
import axios from "axios"
// import ImagePicker from 'react-native-image-crop-picker';


const icon_camera = require('../../assets/images/icon_camera.png')
const icon_Arrow = require('../../assets/images/icon_down_arrow.png');

const ProductForm = (props) => {
    
    const [pickerValue, setPickerValue] = useState();
    const [brand, setBrand] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState(null);
    const [isImagePicked, setImagePicked] = useState(false);
    const [images, setImages] = useState(null);
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState();
    const [err, setError] = useState();
    const [countInStock, setCountInStock] = useState();
    const [rating, setRating] = useState(0);
    const [isFeatured, setIsFeature] = useState(false);
    const [richDescription, setRichDescription] = useState();
    const [numReviews, setNumReviews] = useState(0);
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Categories
        axios
            .get(`${baseURL}categories`)
            .then((res) => setCategories(res.data))
            .catch((error) => alert("Error to load categories"));

        // Image Picker
        // (async () => {
        //     if (Platform.OS !== "web") {
        //         const {
        //             status,
        //         } = await ImagePicker.requestCameraPermissionsAsync();
        //         if (status !== "granted") {
        //             alert("Sorry, we need camera roll permissions to make this work!")
        //         }
        //     }
        // })();
           
    
        return () => {
            setCategories([])
            
        }
    }, [])
     const renderAsset = () => {
           return renderImage(image)
     }

     const renderImage = () => {
      return (
        <Image style={styles.image} source={{uri: mainImage}}/>
      )

     }
    // const ImagePick = async () => {
    //     if (isImagePicked == false) {
    //         const options = {
    //           storageOptions: {
    //             skipBackup: true,
    //             multiple: true,
    //             path: 'images',
    //           },
    //         };
      
    //         ImagePicker.showImagePicker(options, (response) => {
    //           if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //           } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //           } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //           } else {
    //             let source = '';
    //             var RandomNumber = Math.floor(Math.random() * 1000) + 1;
      
    //             source = {
    //               name: `image-${RandomNumber}.jpeg`,
    //               type: response.type,
    //               uri: response.uri,
    //               size: response.fileSize,
    //               path: response.path,
    //             };
      
    //             let imageType = source.type ? source.type.toLowerCase() : null;
    //             if (
    //               (imageType && imageType != '',
    //               imageType == 'image/jpeg' ||
    //                 imageType == 'image/jpg' ||
    //                 imageType == 'image/png')
    //             ) {

    //                image.push(source);
    //                setImage({
    //                    image: image,
    //                    isImagePicked: true
    //                }, () => {
    //                  console.log('imagee', image)
    //                });
                  
    //             }
    //           }
    //         });
    //       }
    // };

    const  pickSingleWithCamera = (cropping, mediaType = 'photo') => {

        ImagePicker.openCamera({
          cropping: cropping,
          width: 500,
          height: 500,
          includeExif: true,
          mediaType,
        })
          .then((image) => {
            console.log('received image', image);
            this.setState({
              image: {
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
              },
              images: null,
            });
          })
          .catch((e) => alert(e));
      }
    
   

  

    // const addProduct = () => {
    //     if (
    //         name == "" ||
    //         brand == "" ||
    //         price == "" ||
    //         description == "" ||
    //         category == "" ||
    //         countInStock == ""
    //     ) {
    //         setError("Please fill in the form correctly")
    //     }

    //     let formData = new FormData();

    //     const newImageUri = "file:///" + image.split("file:/").join("");

    //     formData.append("image", {
    //         uri: newImageUri,
    //         type: mime.getType(newImageUri),
    //         name: newImageUri.split("/").pop()
    //     });
    //     formData.append("name", name);
    //     formData.append("brand", brand);
    //     formData.append("price", price);
    //     formData.append("description", description);
    //     formData.append("category", category);
    //     formData.append("countInStock", countInStock);
    //     formData.append("richDescription", richDescription);
    //     formData.append("rating", rating);
    //     formData.append("numReviews", numReviews);
    //     formData.append("isFeatured", isFeatured);

    //     const config = {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             Authorization: `Bearer ${token}`
    //         }
    //     }

    //     if(item !== null) {
    //         axios
    //         .put(`${baseURL}products/${item.id}`, formData, config)
    //         .then((res) => {
    //             if(res.status == 200 || res.status == 201) {
    //                 Toast.show({
    //                     topOffset: 60,
    //                     type: "success",
    //                     text1: "Product successfuly updated",
    //                     text2: ""
    //                 });
    //                 setTimeout(() => {
    //                     props.navigation.navigate("Products");
    //                 }, 500)
    //             }
    //         })
    //         .catch((error) => {
    //             Toast.show({
    //                 topOffset: 60,
    //                     type: "error",
    //                     text1: "Something went wrong",
    //                     text2: "Please try again"
    //             })
    //         })
    //     } else {
    //         axios
    //         .post(`${baseURL}products`, formData, config)
    //         .then((res) => {
    //             if(res.status == 200 || res.status == 201) {
    //                 Toast.show({
    //                     topOffset: 60,
    //                     type: "success",
    //                     text1: "New Product added",
    //                     text2: ""
    //                 });
    //                 setTimeout(() => {
    //                     props.navigation.navigate("Products");
    //                 }, 500)
    //             }
    //         })
    //         .catch((error) => {
    //             Toast.show({
    //                 topOffset: 60,
    //                     type: "error",
    //                     text1: "Something went wrong",
    //                     text2: "Please try again"
    //             })
    //         })
    //     } 
    // }

    return (
       <FormContainer title="Add Product">
           {image ? renderAsset(image) : null}
           {images ? images.map((i)=>(
         <View key={i.uri}style={styles.imageContainer}>
             {this.renderAsset(i)}
         </View>        
           )) : null}
           <TouchableOpacity onPress={pickSingleWithCamera(false)} style={styles.imagePicker}>
                <Image source={icon_camera} />
             </TouchableOpacity>
           <View style={styles.label}>
               <Text style={{ textDecorationLine: "underline"}}>Brand</Text>
           </View>
           <Input 
            placeholder="Brand"
            name="brand"
            id="brand"
            value={brand}
            onChangeText={(text) => setBrand(text)}
           />
           <View style={styles.label}>
               <Text style={{ textDecorationLine: "underline"}}>Name</Text>
           </View>
           <Input 
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChangeText={(text) => setName(text)}
           />
            <View style={styles.label}>
               <Text style={{ textDecorationLine: "underline"}}>Price</Text>
           </View>
           <Input 
            placeholder="Price"
            name="price"
            id="price"
            value={price}
            keyboardType={"numeric"}
            onChangeText={(text) => setPrice(text)}
           />
            <View style={styles.label}>
               <Text style={{ textDecorationLine: "underline"}}>Count in Stock</Text>
           </View>
           <Input 
            placeholder="Stock"
            name="stock"
            id="stock"
            value={countInStock}
            keyboardType={"numeric"}
            onChangeText={(text) => setCountInStock(text)}
           />
            <View style={styles.label}>
               <Text style={{ textDecorationLine: "underline"}}>Description</Text>
           </View>
           <Input 
            placeholder="Description"
            name="description"
            id="description"
            value={description}
            onChangeText={(text) => setDescription(text)}
           />
           <Item picker>
                <Picker
                    mode="dropdown"
                    iosIcon={<Image source={icon_Arrow} color={"#007aff"} />}
                    style={{ width: undefined }}
                    placeholder="Select your Category"
                    selectedValue={pickerValue}
                    placeholderStyle={{ color: "#007aff"}}
                    placeholderIconColor="#007aff"
                    onValueChange={(e) => [setPickerValue(e), setCategory(e)]}
                >
                    {categories.map((c) => {
                        return <Picker.Item key={c.id} label={c.name} value={c.id} />
                    })}
                </Picker>
           </Item>
           {err ? <Error message={err} /> : null}
           <View style={styles.buttonContainer}>
               <EasyButton
                large
                primary
                onPress={() =>{}}               
               >
                   <Text style={styles.buttonText}>Confirm</Text>
               </EasyButton>
           </View>
       </FormContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        width: "80%",
        marginTop: 10
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 80,
        marginTop: 20,
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderStyle: "solid",
        borderWidth: 8,
        padding: 0,
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "#E0E0E0",
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    imagePicker: {
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "grey",
        padding: 8,
        borderRadius: 100,
        elevation: 20
    }
})

export default ProductForm;