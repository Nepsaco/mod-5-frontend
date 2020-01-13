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

    getARScene = () => {
        const { targetImage, runAnimation } = this.state
        // const { id, title, resource_url, social_url, website } = this.props.arSceneNavigator.viroAppProps['0']
        return(
            <ViroNode>
                <ViroARImageMarker target={'rmn'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.02, 0]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.card}
                            >
                                <ViroFlexView
                                    style={styles.cardWrapper}
                                >
                                    <ViroImage
                                        height={0.015}
                                        width={0.015}
                                        style={styles.image}
                                        source={require('./res/download.jpeg')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text={'RetailMeNot, Inc.'}
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => Alert.alert("HI")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                        width={0.01}
                                        height={0.01}
                                        textAlign="left"
                                        textClipMode="None"
                                        text={'@RetailMeNot'}
                                        scale={[.01, .01, .01]}
                                        style={styles.textStyle}
                                    />
                                    <ViroImage
                                        height={0.01}
                                        width={0.01}
                                        style={styles.image}
                                        source={require('./res/Instagram.png')}
                                    />
                                </ViroFlexView>
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.RetailMeNot.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.textStyle}
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
                            opacity={0} position={[0, -0.02, 0]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.card}
                            >
                                <ViroFlexView
                                    style={styles.cardWrapper}
                                >
                                    <ViroImage
                                        height={0.015}
                                        width={0.015}
                                        style={styles.image}
                                        source={require('./res/download.jpeg')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text={'WhaleShark Media'}
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => Alert.alert("twitter")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                    width={0.01}
                                    height={0.01}
                                    textAlign="left"
                                    textClipMode="None"
                                    text={'@WhaleShark'}
                                    scale={[.01, .01, .01]}
                                    style={styles.textStyle}
                                    />
                                    <ViroImage
                                        height={0.01}
                                        width={0.01}
                                        style={styles.image}
                                        source={require('./res/Instagram.png')}
                                    />
                                </ViroFlexView>
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.whalesharkmedia.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.textStyle}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'bredkrum'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.02, 0]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.card}
                            >
                                <ViroFlexView
                                    style={styles.cardWrapper}
                                >
                                    <ViroImage
                                        height={0.015}
                                        width={0.015}
                                        style={styles.image}
                                        source={require('./res/download.jpeg')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text={'Bredkrum'}
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => Alert.alert("HI")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                        width={0.01}
                                        height={0.01}
                                        textAlign="left"
                                        textClipMode="None"
                                        text={'@bredkrum'}
                                        scale={[.01, .01, .01]}
                                        style={styles.textStyle}
                                    />
                                    <ViroImage
                                        height={0.01}
                                        width={0.01}
                                        style={styles.image}
                                        source={require('./res/Instagram.png')}
                                    />
                                </ViroFlexView>
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.bredkrum.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.textStyle}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'zoom'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.02, 0]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.card}
                            >
                                <ViroFlexView
                                    style={styles.cardWrapper}
                                >
                                    <ViroImage
                                        height={0.015}
                                        width={0.015}
                                        style={styles.image}
                                        source={require('./res/download.jpeg')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text={'Zoom'}
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => Alert.alert("HI")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                        width={0.01}
                                        height={0.01}
                                        textAlign="left"
                                        textClipMode="None"
                                        text={'@zoom'}
                                        scale={[.01, .01, .01]}
                                        style={styles.textStyle}
                                    />
                                    <ViroImage
                                        height={0.01}
                                        width={0.01}
                                        style={styles.image}
                                        source={require('./res/Instagram.png')}
                                    />
                                </ViroFlexView>
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
                                style={styles.textStyle}
                            />
                        </ViroNode>
                    </ViroNode>
                </ViroARImageMarker>
                <ViroARImageMarker target={'flatiron'}
                    onAnchorFound={
                        () => this.setState({
                            runAnimation: true
                        })}
                >
                    <ViroNode key="card">
                        <ViroNode
                            opacity={0} position={[0, -0.02, 0]}
                            animation={{
                                name:'animateImage',
                                run: runAnimation
                            }}
                        >
                            <ViroFlexView
                                rotation={[-90, 0, 0]}
                                height={0.03}
                                width={0.05}
                                style={styles.card}
                            >
                                <ViroFlexView
                                    style={styles.cardWrapper}
                                >
                                    <ViroImage
                                        height={0.015}
                                        width={0.015}
                                        style={styles.image}
                                        source={require('./res/download.jpeg')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text={'Flatiron School'}
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => Alert.alert("HI")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                        width={0.01}
                                        height={0.01}
                                        textAlign="left"
                                        textClipMode="None"
                                        text={'@flatironschool'}
                                        scale={[.01, .01, .01]}
                                        style={styles.textStyle}
                                    />
                                    <ViroImage
                                        height={0.01}
                                        width={0.01}
                                        style={styles.image}
                                        source={require('./res/Instagram.png')}
                                    />
                                </ViroFlexView>
                            </ViroFlexView>
                        </ViroNode>
                        <ViroNode opacity={0} position={[0, 0, 0]}
                            animation={{
                                name:'animateViro',
                                run: runAnimation
                            }}
                        >
                            <ViroText text="www.flatironschool.com"
                                rotation={[-90, 0, 0]}
                                scale={[.01, .01, .01]}
                                style={styles.textStyle}
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
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#ffffff',
        textAlignVertical: 'top',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'column'
    },
    cardWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0.001,
        flex: .5
    },
    image: {
        padding:0.001,
        flex: 1
    },
    subText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: .5
    }
});

ViroARTrackingTargets.createTargets({
    'flatiron': {
        source: require('./res/flatpic.JPG'),
        orientation: 'Up',
        physicalWidth: 0.0762
    }, 
    'zoom': {
        source:  require('./res/zoom.JPG'),
        orientation: 'Up',
        physicalWidth: 0.1
    },
    'bredkrum': {
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
