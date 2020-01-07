'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

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
        text : "Initializing AR...",
        isTracking: false,
        initialized: false,
        runAnimation: false,
        targetImage: ''
    };

    getARScene = () => {
        const { targetImage, runAnimation } = this.state
        return(
            <ViroNode>
                <ViroARImageMarker target={targetImage}
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
                                        source={require('./res/avatar.png')}
                                    />
                                    <ViroText
                                        textClipMode="None"
                                        text="Vladimir Novick"
                                        scale={[.015, .015, .015]}
                                        style={styles.textStyle}
                                    />
                                </ViroFlexView>
                                <ViroFlexView
                                    onTouch={() => alert("twitter")}
                                    style={styles.subText}
                                >
                                    <ViroText
                                        width={0.01}
                                        height={0.01}
                                        textAlign="left"
                                        textClipMode="None"
                                        text="@VladimirNovick"
                                        scale={[.01, .01, .01]}
                                        style={styles.textStyle}
                                    />
                                    <ViroAnimatedImage
                                        height={0.01}
                                        width={0.01}
                                        loop={true}
                                        source={require('./res/tweet.gif')}
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
                            <ViroText text="www.viromedia.com"
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
        const { text, isTracking } = this.state
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                {isTracking ? this.getNoTrackingUI() : this.getARScene()}
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
    fontSize: 30,
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
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroARTrackingTargets.createTargets({
    'flatironLogo': {
        source: require('./res/Flatiron-Logo.png'),
        orientation: 'Up',
        physicalWidth: 0.05
    }, 
    'businessCard':{
        source: require('./res/business_card.png'),
        orientation: 'Up',
        physicalWidth: 0.07
    }
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
