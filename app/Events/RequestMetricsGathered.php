<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RequestMetricsGathered
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    private $start;
    private $end;
    private $uri;

    /**
     * Create a new event instance.
     */
    public function __construct($start, $end, $uri)
    {
        $this->start = $start;
        $this->end = $end;
        $this->uri = $uri;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
