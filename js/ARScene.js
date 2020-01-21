'use strict';

import React, { Component } from 'react';

import {StyleSheet, View, Text, Alert} from 'react-native';

import {
    ViroARScene,
    ViroDirectionalLight,
    ViroBox,
    ViroConstants,
    ViroARTrackingTargets,
    ViroMaterials,
    ViroText,
    ViroImage,
    ViroFlexView,
    ViroARImageMarker,
    ViroARObjectMarker,
    ViroAmbientLight,
    ViroARPlane,
    ViroAnimatedImage,
    ViroAnimations,
    ViroNode,
    Viro3DObject,
    ViroQuad
} from 'react-viro';

export default class ARScene extends Component {

    state = {
        text : "scan a sticker...",
        isTracking: false,
        initialized: false,
        runAnimation: false,
        targetImage: 'whaleshark'
    };

    // makeNode = () => {
    //     const { runAnimation } = this.state
    //     this.props.arSceneNavigator.viroAppProps.map(asset => {
    //             <ViroARImageMarker target={asset.title}
    //                 onAnchorFound={
    //                     () => this.setState({
    //                         runAnimation: true
    //                     })}
    //             >
    //                 <ViroNode key="card">
    //                     <ViroNode
    //                         opacity={0} position={[0, -0.015, 0.02]}
    //                         animation={{
    //                             name:'animateImage',
    //                             run: runAnimation
    //                         }}
    //                         style={styles.card}
    //                     >
    //                         <ViroFlexView
    //                             rotation={[-90, 0, 0]}
    //                             height={.065}
    //                             width={.02}
    //                             style={styles.cardWrapper}
    //                         >
    //                             <ViroImage
    //                                 height={0.02}
    //                                 width={0.02}
    //                                 style={styles.image}
    //                                 source={asset.resource_url}
    //                             />
    //                             <ViroText
    //                                 textLineBreakMode='None'
    //                                 textClipMode="None"
    //                                 text={asset.title}
    //                                 scale={[.015, .015, .015]}
    //                                 style={styles.text}
    //                             />
    //                         </ViroFlexView>
    //                         <ViroFlexView
    //                             rotation={[-90, 0, 0]}
    //                             height={0.03}
    //                             width={0.05}
    //                             style={styles.cardWrapper}
    //                         >
    //                             <ViroText
    //                                 textLineBreakMode='None'
    //                                 textClipMode="None"
    //                                 text={`@${asset.title}`}
    //                                 scale={[.015, .015, .015]}
    //                                 style={styles.text}
    //                             />
    //                         </ViroFlexView>
    //                     </ViroNode>
    //                     <ViroNode opacity={0} position={[0, 0, 0]}
    //                         animation={{
    //                             name:'animateViro',
    //                             run: runAnimation
    //                         }}
    //                     >
    //                         <ViroText text={asset.website}
    //                             rotation={[-90, 0, 0]}
    //                             scale={[.01, .01, .01]}
    //                             style={styles.text}
    //                         />
    //                     </ViroNode>
    //                 </ViroNode>
    //             </ViroARImageMarker>
    //     })
    // }

    getARScene = () => {
        const { targetImage, runAnimation } = this.state
        // const { id, title, resource_url, social_url, website } = this.props.arSceneNavigator.viroAppProps['0']
        return(
            <ViroNode> 
                {/* {this.makeNode()} */}
                <ViroARImageMarker target={'Wework'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/weworklogo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'Wework'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@wework'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.wework.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'Wework'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/weworklogo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'Wework'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@wework'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.wework.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'rmn'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/rmnlogo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'RetailMeNot, Inc.'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@retailmenot'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.retailmenot.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'whaleshark'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/rmnlogo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'WhaleSharkMedia'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@Retailmenot'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.retailmenot.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'Bredkrum'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/download.jpeg')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'Bredkrum'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@bredkrum'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.Bredkrum.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'Zoom'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/zoomlogo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'Zoom'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@Zoomus'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.zoom.us"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'Flatiron School'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.015, 0.02]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                            style={styles.card}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={.065}
                                width={.02}
                                style={styles.cardWrapper}
                            >
                                <ViroImage
                                    height={0.02}
                                    width={0.02}
                                    style={styles.image}
                                    source={require('./res/Flatiron_Logo.png')}
                                />
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'Flatiron School'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.cardWrapper}
                            >
                                <ViroText
                                    textLineBreakMode='None'
                                    textClipMode="None"
                                    text={'@FlatironSchool'}
                                    scale={[.015, .015, .015]}
                                    style={styles.text}
                                />
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.FlatironSchool.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.text}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
            </ViroNode>
        )
    }

    getNoTrackingUI = () => {
        const { text, isTracking, initialized } = this.state
        return(
            <ViroText text={initialized ? text : 'No Tracking'} />
        )
    }

    render() {
        // const prop = this.props.arSceneNavigator.viroAppProps.assets[0]
        // console.warn('tobie', prop.title)
        const { isTracking } = this.state
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                {isTracking ? this.getNoTrackingUI() :this.getARScene()}
            </ViroARScene>
        );
    }


    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            isTracking: true 
        } else if (state == ViroConstants.TRACKING_NONE) {
            isTracking: false 
        }
    }
}

const styles = StyleSheet.create({
    textStyle: {
        flex: .5,
        fontFamily: 'Roboto',
        fontSize: 70,
        color: '#ffffff',
        textAlignVertical: 'top',
        textAlign: 'left',
        fontWeight: 'bold',
    },

    card: {
        flexDirection: 'column',
        flex: 2
    },

    cardWrapper: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    text: {
        fontSize: 70,
        textAlignVertical: 'center',
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        flex: 1
    },

    // cardWrapper: {
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     padding: .001,
    //     flex: .5 
    // },

    image: {
        alignSelf: 'center',
        flex: 0
    },

    subText: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0.001,
        flex: .5
    }
});

ViroARTrackingTargets.createTargets({
    'Flatiron School': {
        source: require('./res/flatpic.JPG'),
        orientation: 'Up',
        physicalWidth: 0.0762
    }, 
    'Zoom': {
        source:  require('./res/zoom.JPG'),
        orientation: 'Up',
        physicalWidth: 0.1
    },
    'Bredkrum': {
        source:  require('./res/bredkrum.JPG'),
        orientation: 'Up',
        physicalWidth: 0.1
    },
    'rmn': {
        source:  require('./res/RMN.JPG'),
        orientation: 'Up',
        physicalWidth: 0.0762
    },
    'whaleshark': {
        source:  require('./res/whaleshark.JPG'),
        orientation: 'Up',
        physicalWidth: 0.0762
    },
    'Wework': {
        source:  require('./res/wework.JPG'),
        orientation: 'Up',
        physicalWidth: 0.0762
    },
})

ViroMaterials.createMaterials({
    imagePlaceholder: {
        diffuseColor: "rgba(255,255,255,1)"
    },
    quad: {
        diffuseColor: "rgba(0,0,0,0.5)"
    }
});

ViroAnimations.registerAnimations({
    animateImage:{
        properties:{
            positionX: 0.05,
            opacity: 1.0
        },
        easing:"Bounce",
        duration: 500
    },
    animateViro: {
        properties: {
            positionZ: 0.02,
            opacity: 1.0,
        },
        easing:"Bounce",
        duration: 500
    }
});

module.exports = ARScene
